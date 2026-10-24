/**
 * Pure business logic for Atiyab Al-Madina Perfumes
 * Handles cart/selection calculations, category filtering, search, and WhatsApp message generation.
 */

export interface Product {
  id: number;
  itemNumber: number;
  name: string;
  category: string;
  subtitle: string;
  notes: string;
  priceOman: number; // in OMR, e.g. 45.000
  priceDisplay: string; // e.g. "OMR 45.000"
  image: string;
  cardImage: string;
  description: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export const WHATSAPP_CONFIG = {
  // Configurable WhatsApp Business number (International format without '+' or spaces)
  phoneNumber: "REPLACE_WITH_CLIENT_NUMBER",
  brandNameEnglish: "Atiyab Al-Madina Perfumes",
  brandNameArabic: "أطياب المدينة للعطور"
};

/**
 * Generates direct single-product WhatsApp order URL
 */
export function generateSingleProductWhatsAppUrl(
  product: Product,
  quantity: number,
  phoneNumber: string = WHATSAPP_CONFIG.phoneNumber
): string {
  const qty = Math.max(1, quantity || 1);
  const total = (product.priceOman * qty).toFixed(3);
  
  const text = 
`Hello ${WHATSAPP_CONFIG.brandNameEnglish}!

I would like to enquire about this product from your catalogue:

• Product: ${product.name}
• Fragrance Notes: ${product.notes}
• Quantity: ${qty}
• Unit Price: ${product.priceDisplay}
• Total Estimate: OMR ${total}

Please confirm availability and the final order details.

Thank you!`;

  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
}

/**
 * Generates multi-product WhatsApp enquiry URL
 */
export function generateMultiProductWhatsAppUrl(
  items: CartItem[],
  phoneNumber: string = WHATSAPP_CONFIG.phoneNumber
): string {
  if (!items || items.length === 0) {
    const defaultText = `Hello ${WHATSAPP_CONFIG.brandNameEnglish}! I would like to enquire about your fragrance catalogue.`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultText)}`;
  }

  let totalOmr = 0;
  let itemsList = "";

  items.forEach((item, index) => {
    const itemTotal = item.product.priceOman * item.quantity;
    totalOmr += itemTotal;
    itemsList += `${index + 1}. ${item.product.name} (x${item.quantity}) - ${item.product.priceDisplay} [Subtotal: OMR ${itemTotal.toFixed(3)}]\n`;
  });

  const text =
`Hello ${WHATSAPP_CONFIG.brandNameEnglish}!

I would like to place an enquiry for the following selected items:

${itemsList}
Total Items: ${calculateTotalQuantity(items)}
Estimated Order Total: OMR ${totalOmr.toFixed(3)}

Please confirm stock availability and proceed with my order details.

Thank you!`;

  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
}

/**
 * Calculates total number of items in selection
 */
export function calculateTotalQuantity(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.quantity, 0);
}

/**
 * Calculates total price in OMR
 */
export function calculateTotalPrice(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.product.priceOman * item.quantity, 0);
}

/**
 * Filters products by category and search keyword
 */
export function filterProducts(
  products: Product[],
  activeCategory: string,
  searchQuery: string = ""
): Product[] {
  const query = searchQuery.trim().toLowerCase();
  
  return products.filter((product) => {
    const matchesCategory =
      !activeCategory ||
      activeCategory === "All" ||
      activeCategory === "All Products" ||
      product.category.toLowerCase() === activeCategory.toLowerCase();

    if (!matchesCategory) return false;

    if (!query) return true;

    return (
      product.name.toLowerCase().includes(query) ||
      product.subtitle.toLowerCase().includes(query) ||
      product.notes.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.priceDisplay.toLowerCase().includes(query)
    );
  });
}
