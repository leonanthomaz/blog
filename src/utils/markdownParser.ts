// src/utils/markdownParser.ts
export type MarkdownElement =
  | { type: 'heading'; level: number; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'code'; language: string; code: string }
  | { type: 'image'; src: string; alt?: string }
  | { type: 'list'; ordered: boolean; items: string[] };

export function parseMarkdown(content: string): MarkdownElement[] {
  const lines = content.split('\n');
  const elements: MarkdownElement[] = [];

  let listBuffer: string[] = [];
  let listOrdered = false;

  const flushList = () => {
    if (listBuffer.length > 0) {
      elements.push({ type: 'list', ordered: listOrdered, items: [...listBuffer] });
      listBuffer = [];
      listOrdered = false;
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (!line) {
      flushList();
      continue;
    }

    // Cabeçalho
    const headingMatch = line.match(/^(#{1,6})\s+(.*)$/);
    if (headingMatch) {
      flushList();
      elements.push({ type: 'heading', level: headingMatch[1].length, text: headingMatch[2] });
      continue;
    }

    // Bloco de código
    if (line.startsWith('```')) {
      flushList();
      const language = line.slice(3).trim() || 'text';
      let code = '';
      i++;
      while (i < lines.length && !lines[i].startsWith('```')) {
        code += lines[i] + '\n';
        i++;
      }
      elements.push({ type: 'code', language, code: code.trim() });
      continue;
    }

    // Imagem
    const imgMatch = line.match(/!\[(.*?)\]\((.*?)\)/);
    if (imgMatch) {
      flushList();
      elements.push({ type: 'image', alt: imgMatch[1], src: imgMatch[2] });
      continue;
    }

    // Lista (ordered ou unordered)
    const ulMatch = line.match(/^[-*]\s+(.*)$/);
    const olMatch = line.match(/^\d+\.\s+(.*)$/);

    if (ulMatch) {
      listBuffer.push(ulMatch[1]);
      listOrdered = false;
      continue;
    }
    if (olMatch) {
      listBuffer.push(olMatch[1]);
      listOrdered = true;
      continue;
    }

    // Paragrafo
    flushList();
    elements.push({ type: 'paragraph', text: line });
  }

  flushList();
  return elements;
}
