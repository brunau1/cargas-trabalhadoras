# Cargas trabalhadoras

<p>Trabalho prático da disciplina de Planejamento de Capacidade e Avaliação de Sistemas Computacionais, acerca do tema de Caracterização de Cargas de Trabalho.</p>
<p>Para executar o programa:</p>

```
$ npm install
$ node index.js
```

<p>Exemplo de saída:</p>

```
Workload model:
┌──────────────────┬───────────┬───────────────────┬──────────────────────┐
│     (index)      │  average  │ standardDeviation │ variationCoefficient |
├──────────────────┼───────────┼───────────────────┼──────────────────────┤
│     numProcs     │    ---    │        ---        │         ----         |
│     exeTime      │    ---    │        ---        │         ----         │
│ interArrivalTime │    ---    │        ---        │         ----         |
└──────────────────┴───────────┴───────────────────┴──────────────────────┘

Histogram:
┌─────────────────┬──────────────┬───────────────────┬──────────────────────┬───────────┬────────────┐
│     (index)     │   average    │ standardDeviation │ variationCoefficient │ frequency │ percentage │
├─────────────────┼──────────────┼───────────────────┼──────────────────────┼───────────┼────────────┤
│     0-150s      │   49.50307   │     21.46158      │       0.43354        │   42537   │  0.70565   │
│    150-600s     │  264.95302   │     122.56797     │        0.4626        │   9663    │   0.1603   │
│    600-3000s    │  1349.38595  │     652.18762     │       0.48332        │   3586    │  0.05949   │
│  3000-14.000s   │  6771.39291  │    2980.77525     │        0.4402        │   3950    │  0.06553   │
│ 14.000-62.000s  │  22302.1556  │    10087.0921     │       0.45229        │    527    │  0.00874   │
│ 62.000-250.000s │ 100943.66667 │    49663.09542    │       0.49199        │    18     │   0.0003   │
└─────────────────┴──────────────┴───────────────────┴──────────────────────┴───────────┴────────────┘

```
Obs: Os valores utilizados para os intervalos do Histograma são aleatórios.