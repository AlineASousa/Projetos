''' Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;'''

import json

# carrega os dados do faturamento mensal a partir de um arquivo JSON, assumindo que este arquivo tenha apenas duas colunas, "data" : "faturamento",e será interpretado em modo de leitura (r)

with open('faturamentoTeste.json', 'r') as arquivo:
    faturamento_mensal = json.load(arquivo)

# cria uma lista com os valores de faturamento diário, ignorando os dias sem faturamento (0)
faturamento_diario = [valor for valor in faturamento_mensal.values() if valor != 0]

# calcula o menor e o maior valor de faturamento diário
menor_valor = min(faturamento_diario)
maior_valor = max(faturamento_diario)

# calcula a média mensal de faturamento diário
media_mensal = sum(faturamento_diario) / len(faturamento_diario)

# conta o número de dias em que o valor de faturamento diário foi superior à média mensal
dias_acima_da_media = sum(valor > media_mensal for valor in faturamento_diario)

print("Menor valor de faturamento diário:", menor_valor)
print("Maior valor de faturamento diário:", maior_valor)
print("Número de dias com faturamento acima da média mensal:", dias_acima_da_media)
 
