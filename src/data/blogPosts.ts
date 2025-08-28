// src/data/blogPosts.ts
import firecloudLogo from '@/assets/img/firecloud-logo-azul.png';

export interface BlogPost {
  featured?: boolean;
  id: number;
  title: string;
  subtitle: string;
  content: string;
  date: string;
  category: string;
  slug: string;
  image: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Otimizando algoritmos com Python",
    subtitle: "Como melhorar a performance dos seus scripts Python com técnicas avançadas de otimização.",
    content: `# Otimizando algoritmos com Python

Neste artigo vamos explorar técnicas para melhorar a performance dos seus scripts, usando profiling, algoritmos eficientes e estruturas de dados adequadas.

## Exemplo de melhoria de performance

\`\`\`python
# Antes
result = [x**2 for x in range(1000000)]

# Depois
import numpy as np
arr = np.arange(1000000)
result = arr**2
\`\`\`
`,
    date: "2025-08-27",
    category: "Algoritmos",
    slug: "otimizando-algoritmos-com-python",
    image: firecloudLogo,
    tags: ["Python", "Otimização", "Algoritmos"],
    featured: true
  },
  {
    id: 2,
    title: "Web Scraping com Python",
    subtitle: "Como extrair dados de websites de forma eficiente",
    content: `# Web Scraping com Python

Aprenda a coletar dados de sites de forma automática usando Python, Requests e BeautifulSoup.

## Instalando dependências

\`\`\`bash
pip install beautifulsoup4 requests
\`\`\`

## Código básico

\`\`\`python
import requests
from bs4 import BeautifulSoup

def scrape(url):
    r = requests.get(url)
    soup = BeautifulSoup(r.content, 'html.parser')
    return [h2.text for h2 in soup.find_all('h2')]
\`\`\`
`,
    date: "2025-08-27",
    category: "Web Scraping",
    slug: "web-scraping-python",
    image: firecloudLogo,
    tags: ["Python", "Web Scraping", "BeautifulSoup"]
  },
  {
    id: 3,
    title: "Automatizando tarefas repetitivas com Python",
    subtitle: "Use Python para automatizar planilhas, renomear arquivos e enviar emails.",
    content: `# Automatização com Python

Automatizar tarefas repetitivas te dá mais tempo para focar no que importa. Vamos ver exemplos de automação de planilhas e envio de emails.

\`\`\`python
import os
import pandas as pd

# Renomear arquivos em lote
for filename in os.listdir("./docs"):
    os.rename(f"./docs/{filename}", f"./docs/novo_{filename}")
\`\`\`
`,
    date: "2025-08-27",
    category: "Automação",
    slug: "automacao-python",
    image: firecloudLogo,
    tags: ["Python", "Automação", "Produtividade"]
  },
  {
    id: 4,
    title: "Introdução a Inteligência Artificial com Python",
    subtitle: "Aprenda conceitos básicos de IA e crie seu primeiro modelo simples com scikit-learn.",
    content: `# Inteligência Artificial com Python

Vamos começar a explorar IA com Python. Usaremos scikit-learn para criar um modelo de classificação simples.

\`\`\`python
from sklearn.datasets import load_iris
from sklearn.ensemble import RandomForestClassifier

data = load_iris()
X, y = data.data, data.target
clf = RandomForestClassifier()
clf.fit(X, y)
print(clf.predict(X[:5]))
\`\`\`
`,
    date: "2025-08-27",
    category: "Inteligência Artificial",
    slug: "ia-python-introducao",
    image: firecloudLogo,
    tags: ["Python", "IA", "Machine Learning"],
  },
  {
    id: 5,
    title: "Bots e automação de tarefas na web",
    subtitle: "Crie bots simples para interagir com sites e redes sociais usando Python e Selenium.",
    content: `# Bots e automação web

Automatize interações na web com Python e Selenium.

\`\`\`python
from selenium import webdriver

driver = webdriver.Chrome()
driver.get("https://example.com")
driver.find_element_by_name("q").send_keys("Python Selenium")
driver.quit()
\`\`\`
`,
    date: "2025-08-27",
    category: "Automação",
    slug: "bots-automacao-web",
    image: firecloudLogo,
    tags: ["Python", "Automação", "Selenium", "Bots"],
    featured: true
  }
];