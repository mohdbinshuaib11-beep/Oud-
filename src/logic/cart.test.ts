import test from 'node:test';
import assert from 'node:assert/strict';
import {
  Product,
  CartItem,
  generateSingleProductWhatsAppUrl,
  generateMultiProductWhatsAppUrl,
  calculateTotalQuantity,
  calculateTotalPrice,
  filterProducts,
  WHATSAPP_CONFIG
} from './cart';

const sampleProducts: Product[] = [
  {
    id: 1,
    itemNumber: 1,
    name: "Royal Oud",
    category: "Oud",
    subtitle: "Pure Cambodian Oud",
    notes: "Woody · Amber · Spicy",
    priceOman: 45.0,
    priceDisplay: "OMR 45.000",
    image: "assets/products/product_01.jpg",
    cardImage: "assets/products/card_01.jpg",
    description: "A regal presentation of pure Cambodian oud."
  },
  {
    id: 11,
    itemNumber: 11,
    name: "Musk Al Tahara",
    category: "Musk",
    subtitle: "Clean and refreshing",
    notes: "Musk · Floral · Powdery",
    priceOman: 32.0,
    priceDisplay: "OMR 32.000",
    image: "assets/products/product_11.jpg",
    cardImage: "assets/products/card_11.jpg",
    description: "The beloved signature of pristine purity."
  },
  {
    id: 26,
    itemNumber: 27,
    name: "Bakhoor Al Oudh",
    category: "Bakhoor",
    subtitle: "Traditional and rich",
    notes: "Oud · Incense · Wood",
    priceOman: 28.0,
    priceDisplay: "OMR 28.000",
    image: "assets/products/product_26.jpg",
    cardImage: "assets/products/card_26.jpg",
    description: "Premium traditional incense chips steeped in agarwood."
  }
];

test('calculateTotalQuantity sums all item counts accurately', () => {
  const items: CartItem[] = [
    { product: sampleProducts[0], quantity: 2 },
    { product: sampleProducts[1], quantity: 3 }
  ];
  assert.equal(calculateTotalQuantity(items), 5);
});

test('calculateTotalPrice computes OMR subtotal accurately', () => {
  const items: CartItem[] = [
    { product: sampleProducts[0], quantity: 2 }, // 45 * 2 = 90
    { product: sampleProducts[1], quantity: 1 }  // 32 * 1 = 32
  ];
  assert.equal(calculateTotalPrice(items), 122.0);
});

test('generateSingleProductWhatsAppUrl creates valid wa.me link with encoded details', () => {
  const url = generateSingleProductWhatsAppUrl(sampleProducts[0], 2, "96899999999");
  assert.match(url, /^https:\/\/wa\.me\/96899999999\?text=/);
  assert.ok(url.includes(encodeURIComponent("Royal Oud")));
  assert.ok(url.includes(encodeURIComponent("OMR 45.000")));
  assert.ok(url.includes(encodeURIComponent("Quantity: 2")));
  assert.ok(url.includes(encodeURIComponent("OMR 90.000")));
});

test('generateMultiProductWhatsAppUrl creates itemized message with total', () => {
  const items: CartItem[] = [
    { product: sampleProducts[0], quantity: 1 },
    { product: sampleProducts[2], quantity: 2 }
  ];
  const url = generateMultiProductWhatsAppUrl(items, "96899999999");
  assert.match(url, /^https:\/\/wa\.me\/96899999999\?text=/);
  assert.ok(url.includes(encodeURIComponent("Royal Oud")));
  assert.ok(url.includes(encodeURIComponent("Bakhoor Al Oudh")));
  assert.ok(url.includes(encodeURIComponent("Total Items: 3")));
  assert.ok(url.includes(encodeURIComponent("OMR 101.000")));
});

test('filterProducts filters by category', () => {
  const oudItems = filterProducts(sampleProducts, "Oud");
  assert.equal(oudItems.length, 1);
  assert.equal(oudItems[0].name, "Royal Oud");

  const muskItems = filterProducts(sampleProducts, "Musk");
  assert.equal(muskItems.length, 1);
  assert.equal(muskItems[0].name, "Musk Al Tahara");

  const allItems = filterProducts(sampleProducts, "All");
  assert.equal(allItems.length, 3);
});

test('filterProducts searches across name, notes and description', () => {
  const searchRose = filterProducts(sampleProducts, "All", "incense");
  assert.equal(searchRose.length, 1);
  assert.equal(searchRose[0].name, "Bakhoor Al Oudh");

  const searchCambodian = filterProducts(sampleProducts, "All", "Cambodian");
  assert.equal(searchCambodian.length, 1);
  assert.equal(searchCambodian[0].name, "Royal Oud");
});
