/**
 * Slug validation ve normalization utilities.
 *
 * Route param'dan gelen slug'ları işlemeden önce validate etmek için kullanılır.
 * Amaç: XSS / injection riskini azaltmak, malformed URL'lerde erken 404 dönmek,
 * ve data lookup'lara sadece güvenli slug'ların gitmesini sağlamak.
 */

/** İzin verilen maksimum slug uzunluğu. URL'de normal bir blog slug'ı ~80-100 karakter olur. */
const MAX_SLUG_LENGTH = 200

/**
 * Sadece ASCII küçük harf, rakam ve tek tire içeren slug pattern.
 * - Başta/sonda tire olamaz
 * - Ardışık tire olamaz
 * - Boş olamaz
 */
const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

/**
 * Bir slug'ın güvenli ve iyi formatlı olup olmadığını kontrol eder.
 * Bu fonksiyon whitelist check öncesi ilk savunma hattıdır.
 */
export function isValidSlug(slug: string | undefined | null): slug is string {
  if (typeof slug !== 'string') return false
  if (slug.length === 0 || slug.length > MAX_SLUG_LENGTH) return false
  return SLUG_PATTERN.test(slug)
}

/**
 * Slug'ı normalize eder — boşlukları temizler, küçük harfe çevirir.
 * NOT: Bu sadece cosmetic normalization. Turkish karakter ya da özel karakter
 * varsa invalid kabul edilir; URL'lerde zaten ASCII slug kullanılıyor.
 */
export function normalizeSlug(slug: string | undefined | null): string | null {
  if (typeof slug !== 'string') return null
  const trimmed = slug.trim().toLowerCase()
  return isValidSlug(trimmed) ? trimmed : null
}
