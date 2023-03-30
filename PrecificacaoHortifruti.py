def cadastra_produtos():
    n = int(input("Digite a quantidade de produtos a serem cadastrados: "))
    produtos = {}
    for i in range(n):
        nome = input("Digite o nome do produto: ")
        preco = float(input("Digite o preço do produto: "))
        if nome in produtos:
            print("Produto já cadastrado.")
        else:
            produtos[nome] = preco
            print("Produto cadastrado com sucesso.")
    return produtos

def busca_preco(produtos):
    while True:
        nome = input("Digite o nome do produto para consultar (para sair digite Fim): ")
        if nome == "Fim":
            break
        if nome in produtos:
            print("Preço do produto {}: R$ {:.2f}".format(nome, produtos[nome]))
        else:
            print("Produto não cadastrado.")

produtos = cadastra_produtos()
busca_preco(produtos)

