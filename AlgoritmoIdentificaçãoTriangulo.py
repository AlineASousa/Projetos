""" Dados três valores positivos A, B e C, construa um programa em Python que verifica se
os mesmos podem ser os comprimentos dos lados de um triângulo.
Se sim, verificar e imprimir se o triângulo é equilátero (3 lados iguais), isósceles (2 lados iguais)
ou escaleno (3 lados diferentes).
Informar se os valores não formarem nenhum triângulo."""

a = eval(input('Digite um número positivo correspondente ao lado 1: '))
b = eval(input('Digite um número positivo correspondente ao lado 2: '))
c = eval(input('Digite um número positivo correspondente ao lado 3: '))

maiorLado = max(a, b, c)
# expressão lógica
if maiorLado < a + b + c - maiorLado:
    print('Os lados informados formam um triângulo!')
    # expressão relacional
    if a == b and b == c and a == c:
        print('Tipo: Triângulo Equilátero')
    elif a != b and b != c and a != c:
        print('Tipo: Triângulo Escaleno')
    else:
        print('Tipo: Triângulo Isósceles')
else:
    print('Os lados informados NÃO formam um triângulo!')
