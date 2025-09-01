// src/utils/readTime.ts
/**
 * Calcula o tempo de leitura de um texto com base em uma velocidade de leitura média.
 * @param content O conteúdo do texto em string.
 * @returns O tempo de leitura formatado como "X min de leitura".
 */
export const calculateReadTime = (content: string): string => {
  const wordsPerMinute = 230; // Velocidade de leitura média em palavras por minuto
  const text = content.replace(/```[\s\S]*?```/g, ''); // Ignora blocos de código
  const wordCount = text.trim().split(/\s+/).length; // Contagem do tamanho da palavra
  const readTime = Math.ceil(wordCount / wordsPerMinute); // Calculo de tempo de leitura
  return `${readTime} min de leitura`;
};