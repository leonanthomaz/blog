// src/data/blogPosts.ts
import pythonBanner from '@/assets/img/python.webp';
import iaBanner from '@/assets/img/banner-chatbot.jpg';
import httpBanner from '@/assets/img/http.webp';

export interface BlogPost {
  featured?: boolean;
  id: number;
  title: string;
  subtitle: string;
  content: string;
  date: string;
  category: string;
  slug: string;
  image?: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Python Básico: Fundamentos Essenciais",
    subtitle: "Aprenda a estrutura básica, indentação e aplicações do Python em projetos reais.",
    content: `

Python é uma linguagem de programação poderosa e versátil, conhecida por sua sintaxe clara e legível. Neste artigo, vamos explorar os conceitos fundamentais que todo desenvolvedor Python precisa dominar.

## Estrutura Básica do Python

Python é uma linguagem interpretada e de alto nível, o que significa que o código é executado linha por linha, sem necessidade de compilação prévia.

\`\`\`python
# Este é um comentário em Python
print("Olá, Mundo!")  # Esta linha imprime uma mensagem

# Variáveis não precisam de declaração de tipo
nome = "João"
idade = 30
altura = 1.75
\`\`\`

## A Importância da Indentação

Diferente de outras linguagens que usam chaves {} para delimitar blocos de código, Python utiliza indentação (espaçamento) para definir a estrutura do programa.

\`\`\`python
# Exemplo de estrutura condicional com indentação
idade = 18

if idade >= 18:
    print("Você é maior de idade")
    print("Pode acessar todo o conteúdo")
else:
    print("Você é menor de idade")
    print("Acesso restrito")
# A indentação correta é crucial para o funcionamento do código
\`\`\`

## Estruturas de Controle

Python oferece diversas estruturas para controlar o fluxo do programa:

\`\`\`python
# Estruturas condicionais
nota = 85

if nota >= 90:
    print("Conceito A")
elif nota >= 80:
    print("Conceito B")
elif nota >= 70:
    print("Conceito C")
else:
    print("Conceito D")

# Estruturas de repetição
for i in range(5):  # Repete 5 vezes
    print(f"Iteração número {i}")

# Loop while
contador = 0
while contador < 5:
    print(f"Contador: {contador}")
    contador += 1
\`\`\`

## Estruturas de Dados Básicas

Python oferece várias estruturas de dados nativas:

\`\`\`python
# Listas - ordenadas e mutáveis
frutas = ["maçã", "banana", "laranja"]
frutas.append("uva")  # Adiciona novo elemento

# Tuplas - ordenadas e imutáveis
coordenadas = (10, 20)

# Dicionários - pares chave-valor
pessoa = {
    "nome": "Maria",
    "idade": 25,
    "cidade": "São Paulo"
}

# Conjuntos - não ordenados e sem elementos duplicados
numeros = {1, 2, 3, 4, 5}
\`\`\`

## Funções em Python

Funções permitem organizar o código em blocos reutilizáveis:

\`\`\`python
# Definindo uma função
def calcular_media(notas):
    """Calcula a média de uma lista de notas"""
    total = sum(notas)
    media = total / len(notas)
    return media

# Usando a função
notas_aluno = [7.5, 8.0, 9.2, 6.8]
media = calcular_media(notas_aluno)
print(f"Média: {media:.2f}")
\`\`\`

## Onde Python é Aplicado?

Python é extremamente versátil e é usado em diversas áreas:

1. Desenvolvimento Web (Django, Flask)
2. Ciência de Dados (Pandas, NumPy)
3. Inteligência Artificial (TensorFlow, PyTorch)
4. Automação de Tarefas
5. Scripting e DevOps
6. Desenvolvimento de Jogos (Pygame)
7. Internet das Coisas (IoT)

## Conclusão

Python é uma linguagem excelente para iniciantes devido à sua sintaxe clara e legível. A indentação, que inicialmente pode parecer um desafio, rapidamente se torna uma vantagem, pois força a escrita de código bem organizado.

Com esses fundamentos, você está preparado para explorar bibliotecas e frameworks específicos para suas áreas de interesse.

E os próximos passos? Pratique criando pequenos projetos e explore bibliotecas especializadas conforme suas necessidades.
`,
    date: "2025-08-30",
    category: "Python Básico",
    slug: "python-basico-fundamentos",
    image: pythonBanner,
    tags: ["Python", "Fundamentos", "Programação", "Iniciantes"],
    featured: true
  },
  {
    id: 2,
    title: "IA com Python: Primeiros Passos com OpenAI",
    subtitle: "Aprenda a conectar e utilizar a API da OpenAI para criar aplicações inteligentes.",
    content: `

A Inteligência Artificial está transformando a maneira como interagimos com a tecnologia. Neste artigo, vamos aprender como utilizar a API da OpenAI através do Python para criar aplicações inteligentes.

## Preparando o Ambiente

Primeiro, precisamos instalar a biblioteca oficial da OpenAI:

\`\`\`bash
pip install openai
\`\`\`

## Obtendo uma Chave de API

Para usar a API da OpenAI, você precisa de uma chave de API:

1. Acesse [platform.openai.com](https://platform.openai.com)
2. Crie uma conta ou faça login
3. Navegue até a seção "API Keys"
4. Clique em "Create new secret key"
5. Copie e guarde essa chave em um local seguro

## Configurando a Chave de API

Existem duas maneiras seguras de configurar sua chave:

**Opção 1: Variável de ambiente (Recomendado)**
\`\`\`bash
# No terminal (Linux/Mac)
export OPENAI_API_KEY='sua-chave-aqui'

# No PowerShell (Windows)
$env:OPENAI_API_KEY='sua-chave-aqui'
\`\`\`

**Opção 2: Arquivo .env**
\`\`\`python
# Instale a biblioteca python-dotenv
pip install python-dotenv

# Crie um arquivo .env na raiz do projeto
# OPENAI_API_KEY=sua-chave-aqui
\`\`\`

## Estrutura Básica do main.py

Vamos criar um arquivo principal para interagir com a API:

\`\`\`python
import openai
import os
from dotenv import load_dotenv

# Carrega variáveis do arquivo .env
load_dotenv()

# Configura a chave da API
openai.api_key = os.getenv("OPENAI_API_KEY")

def gerar_texto(prompt, modelo="gpt-3.5-turbo", max_tokens=150):
    """
    Gera texto usando a API da OpenAI
    
    Args:
        prompt (str): O texto de entrada para o modelo
        modelo (str): O modelo a ser utilizado
        max_tokens (int): Número máximo de tokens na resposta
    
    Returns:
        str: O texto gerado pelo modelo
    """
    try:
        resposta = openai.ChatCompletion.create(
            model=modelo,
            messages=[{"role": "user", "content": prompt}],
            max_tokens=max_tokens,
            temperature=0.7  # Controla a criatividade (0.0 a 1.0)
        )
        return resposta.choices[0].message.content.strip()
    except Exception as e:
        return f"Erro ao gerar texto: {str(e)}"

# Exemplo de uso
if __name__ == "__main__":
    prompt = "Explique o que é machine learning em uma frase:"
    resultado = gerar_texto(prompt)
    print("Resposta do modelo:")
    print(resultado)
\`\`\`

## Exemplo Prático: Assistente Virtual

Vamos criar um assistente virtual simples:

\`\`\`python
import openai
import os
from dotenv import load_dotenv

load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")

class AssistenteVirtual:
    def __init__(self, modelo="gpt-3.5-turbo"):
        self.modelo = modelo
        self.historico = []
    
    def enviar_mensagem(self, mensagem):
        """Envia uma mensagem e retorna a resposta"""
        self.historico.append({"role": "user", "content": mensagem})
        
        try:
            resposta = openai.ChatCompletion.create(
                model=self.modelo,
                messages=self.historico,
                max_tokens=250,
                temperature=0.7
            )
            
            resposta_texto = resposta.choices[0].message.content
            self.historico.append({"role": "assistant", "content": resposta_texto})
            
            return resposta_texto
        
        except Exception as e:
            return f"Desculpe, ocorreu um erro: {str(e)}"
    
    def limpar_historico(self):
        """Limpa o histórico de conversação"""
        self.historico = []

# Exemplo de uso
if __name__ == "__main__":
    assistente = AssistenteVirtual()
    
    while True:
        pergunta = input("Você: ")
        if pergunta.lower() in ["sair", "exit", "quit"]:
            break
        
        resposta = assistente.enviar_mensagem(pergunta)
        print(f"Assistente: {resposta}")
\`\`\`

## Melhores Práticas e Considerações

1. **Gestão de Custos**: Monitore seu uso da API para evitar surpresas na fatura
2. **Tratamento de Erros**: Sempre implemente tratamento de exceções
3. **Limites de Taxa**: Respeite os limites de requisições por minuto
4. **Privacidade**: Não envie informações sensíveis para a API
5. **Cache**: Considere implementar cache para respostas frequentes

## Conclusão

Integrar a API da OpenAI em aplicações Python é simples e poderoso. Com poucas linhas de código, você pode adicionar capacidades de IA avançadas aos seus projetos.

Lembre-se de sempre seguir as melhores práticas de segurança e gerenciamento de API keys para proteger seus dados e controle de custos.

**Próximos passos**: Explore outros endpoints da API, como geração de imagens (DALL-E) ou transcrição de áudio (Whisper).
`,
    date: "2025-08-30",
    category: "Inteligência Artificial",
    slug: "ia-python-openai",
    image: iaBanner,
    tags: ["Python", "IA", "OpenAI", "API", "Machine Learning"],
    featured: true
  },
  {
    id: 3,
    title: "APIs REST: O Guia Completo para Iniciantes",
    subtitle: "Entenda o que são APIs, como funcionam e os principais códigos de status HTTP.",
    content: `

APIs (Application Programming Interfaces) são a base da comunicação entre aplicações modernas. Neste artigo, vamos explorar o que são APIs REST, como funcionam e os principais códigos de status HTTP.

## O que é uma API?

Uma API é um conjunto de regras e protocolos que permite que diferentes softwares se comuniquem entre si. Imagine uma API como um garçom em um restaurante: você (o cliente) faz um pedido, o garçom leva esse pedido à cozinha (o servidor) e traz a resposta (a comida).

## APIs REST

REST (Representational State Transfer) é um estilo arquitetural para designing APIs. APIs RESTful seguem seis princípios fundamentais:

1. **Interface uniforme**: Recursos são identificados por URLs
2. **Stateless**: Cada requisição contém todas as informações necessárias
3. **Client-Server**: Separação de concerns entre cliente e servidor
4. **Cacheable**: Respostas podem ser cacheadas
5. **Sistema em camadas**: Intermediários podem ser inseridos sem afetar a comunicação
6. **Código sob demanda (opcional)**: Servidores podem estender funcionalidades do cliente

## Principais Métodos HTTP

Cada requisição a uma API utiliza um método HTTP que define a ação a ser executada:

| Método | Descrição | Exemplo |
|--------|-----------|---------|
| GET | Recuperar dados | Obter lista de usuários |
| POST | Criar novo recurso | Adicionar um usuário |
| PUT | Atualizar recurso existente | Editar informações do usuário |
| DELETE | Remover recurso | Excluir um usuário |
| PATCH | Atualização parcial | Modificar apenas o email do usuário |

## Códigos de Status HTTP

Os códigos de status HTTP indicam o resultado de uma requisição. Eles são divididos em cinco categorias:

### 1xx - Informativo
- **100 Continue**: A requisição inicial foi recebida, continue enviando
- **101 Switching Protocols**: Mudança de protocolo

### 2xx - Sucesso
- **200 OK**: Requisição bem-sucedida
- **201 Created**: Recurso criado com sucesso
- **202 Accepted**: Requisição aceita para processamento
- **204 No Content**: Sucesso, mas sem conteúdo para retornar

### 3xx - Redirecionamento
- **301 Moved Permanently**: Recurso movido permanentemente
- **302 Found**: Recurso encontrado em local diferente
- **304 Not Modified**: Recurso não modificado (usado em cache)

### 4xx - Erro do Cliente
- **400 Bad Request**: Requisição malformada
- **401 Unauthorized**: Autenticação necessária
- **403 Forbidden**: Acesso proibido (autenticado mas sem permissão)
- **404 Not Found**: Recurso não encontrado
- **405 Method Not Allowed**: Método não permitido para o recurso
- **429 Too Many Requests**: Muitas requisições em curto período

### 5xx - Erro do Servidor
- **500 Internal Server Error**: Erro genérico do servidor
- **502 Bad Gateway**: Servidor atuando como gateway/proxy recebeu resposta inválida
- **503 Service Unavailable**: Servidor indisponível (sobrecarga ou manutenção)
- **504 Gateway Timeout**: Tempo limite do gateway

## Exemplo Prático com Python

Vamos criar um cliente simples para consumir uma API usando a biblioteca requests:

\`\`\`python
import requests

class APIClient:
    def __init__(self, base_url):
        self.base_url = base_url
        self.session = requests.Session()
    
    def fazer_requisicao(self, metodo, endpoint, dados=None, params=None):
        """Faz uma requisição para a API"""
        url = f"{self.base_url}/{endpoint}"
        
        try:
            resposta = self.session.request(
                metodo, url, json=dados, params=params
            )
            
            # Verifica o status code
            if resposta.status_code >= 400:
                print(f"Erro {resposta.status_code}: {resposta.reason}")
            
            return resposta
        
        except requests.exceptions.RequestException as e:
            print(f"Erro de conexão: {e}")
            return None
    
    def get(self, endpoint, params=None):
        return self.fazer_requisicao('GET', endpoint, params=params)
    
    def post(self, endpoint, dados):
        return self.fazer_requisicao('POST', endpoint, dados=dados)
    
    def put(self, endpoint, dados):
        return self.fazer_requisicao('PUT', endpoint, dados=dados)
    
    def delete(self, endpoint):
        return self.fazer_requisicao('DELETE', endpoint)

# Exemplo de uso
if __name__ == "__main__":
    # Cliente para a JSONPlaceholder API (API de testes)
    cliente = APIClient("https://jsonplaceholder.typicode.com")
    
    # GET - Obter todos os posts
    posts = cliente.get("posts")
    if posts and posts.status_code == 200:
        print("Primeiro post:", posts.json()[0]['title'])
    
    # POST - Criar um novo post
    novo_post = {
        "title": "Meu post",
        "body": "Conteúdo do post",
        "userId": 1
    }
    resposta = cliente.post("posts", novo_post)
    if resposta and resposta.status_code == 201:
        print("Post criado com ID:", resposta.json()['id'])
    
    # PUT - Atualizar um post
    post_atualizado = {
        "id": 1,
        "title": "Título atualizado",
        "body": "Conteúdo atualizado",
        "userId": 1
    }
    resposta = cliente.put("posts/1", post_atualizado)
    if resposta and resposta.status_code == 200:
        print("Post atualizado:", resposta.json()['title'])
    
    # DELETE - Excluir um post
    resposta = cliente.delete("posts/1")
    if resposta and resposta.status_code == 200:
        print("Post excluído com sucesso")
\`\`\`

## Melhores Práticas para Consumir APIs

1. **Tratamento de Erros**: Sempre verifique os códigos de status
2. **Timeout**: Defina timeouts para evitar requisições travadas
3. **Autenticação**: Use métodos seguros para armazenar credenciais
4. **Rate Limiting**: Respeite os limites de requisições da API
5. **Cache**: Implemente cache para respostas que mudam pouco
6. **Logging**: Registre requisições para debugging

## Conclusão

APIs são fundamentais no desenvolvimento moderno de software. Compreender os métodos HTTP e códigos de status é crucial para construir aplicações robustas que se integram com outros serviços.

Ao consumir APIs, sempre consulte a documentação oficial para entender os endpoints disponíveis, formatos de dados esperados e quaisquer particularidades da implementação.

**Próximos passos**: Aprenda a criar suas próprias APIs usando frameworks como Flask ou Django REST Framework.
`,
    date: "2025-08-30",
    category: "APIs",
    slug: "apis-rest-guia-completo",
    image: httpBanner,
    tags: ["APIs", "REST", "HTTP", "Web Development", "Python"],
    featured: true
  },
  {
    id: 4,
    title: "Ambiente Virtual e sua importância",
    subtitle: "Aprenda a isolar as dependências dos seus projetos Python para evitar conflitos.",
    content: `

O desenvolvimento de software frequentemente envolve o uso de diversas bibliotecas e dependências. Sem a organização adequada, isso pode levar a problemas, especialmente quando diferentes projetos precisam de versões distintas da mesma biblioteca. É aqui que entram os **ambientes virtuais**.

## O que é um Ambiente Virtual?

Um ambiente virtual é um diretório auto-suficiente que contém uma instalação do Python e um conjunto de bibliotecas isoladas do ambiente global do sistema. Isso significa que as bibliotecas de um projeto não interferem nas de outro, garantindo a consistência e a portabilidade.

A ferramenta mais comum para isso, e que já vem inclusa a partir do Python 3.3, é o \`venv\`.

## Criando e Ativando o Ambiente Virtual

Primeiro, navegue até a pasta do seu projeto no terminal. Em seguida, execute o comando para criar o ambiente. O nome \`venv\` é uma convenção comum.

\`\`\`bash
# Cria o ambiente virtual chamado 'venv'
python3 -m venv venv
\`\`\`

Após a criação, você precisa "ativar" o ambiente para que as instalações de pacotes (\`pip\`) sejam feitas dentro dele.

**No Linux e macOS:**

\`\`\`bash
# Ativa o ambiente
source venv/bin/activate
\`\`\`

**No Windows (prompt de comando):**

\`\`\`bash
# Ativa o ambiente
venv\\Scripts\\activate.bat
\`\`\`

**No Windows (PowerShell):**

\`\`\`bash
# Ativa o ambiente
venv\\Scripts\\Activate.ps1
\`\`\`

Você saberá que o ambiente está ativado quando vir o nome \`(venv)\` no início da linha de comando. A partir de agora, qualquer pacote que você instalar com \`pip\` será adicionado apenas a este ambiente.

## Gerenciando Dependências com requirements.txt

É uma boa prática registrar todas as dependências do seu projeto em um arquivo. Isso facilita a recriação do ambiente em outra máquina.

**Gerando o arquivo:**

Depois de instalar todas as bibliotecas do seu projeto, use o seguinte comando:

\`\`\`bash
# Gera o arquivo com todas as dependências instaladas
pip freeze > requirements.txt
\`\`\`

**Instalando dependências de um arquivo:**

Quando você for configurar o projeto em um novo ambiente ou em outra máquina, basta ativar o ambiente virtual e usar o comando abaixo para instalar tudo de uma vez:

\`\`\`bash
# Instala as dependências a partir do arquivo
pip install -r requirements.txt
\`\`\`

## Desativando o Ambiente

Quando terminar de trabalhar no projeto, você pode desativar o ambiente virtual para voltar ao ambiente global do seu sistema.

\`\`\`bash
# Desativa o ambiente
deactivate
\`\`\`

## Conclusão

Utilizar ambientes virtuais como o \`venv\` é uma prática fundamental para qualquer desenvolvedor Python. Eles garantem que seus projetos sejam isolados, consistentes e portáteis, resolvendo o problema de conflitos de dependência de forma elegante e eficiente. Ao adotar essa prática desde o início, você evita futuros problemas e mantém seu fluxo de trabalho organizado.
`,
    date: "2025-08-30",
    category: "Python Básico",
    slug: "ambiente-virtual-python",
    tags: ["Python", "Ambiente Virtual", "venv", "Ferramentas", "Dependências"],
  },
];