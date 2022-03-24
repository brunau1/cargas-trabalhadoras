# Cargas trabalhadoras

<p>Trabalho prático da disciplina de Planejamento de Capacidade e Avaliação de Sistemas Computacionais, acerca do tema de Caracterização de Cargas de Trabalho.</p>
<p>Para executar o programa:</p>

```
$ npm install
$ node index.js
```

<p>Exemplo de saída:</p>

```
┌──────────────────┬───────────┬───────────────────┬──────────────────────┐
│     (index)      │  average  │ standardDeviation │ variationCoefficient |
├──────────────────┼───────────┼───────────────────┼──────────────────────┤
│     numProcs     │    ---    │        ---        │         ----         |
│     exeTime      │    ---    │        ---        │         ----         │
│ interArrivalTime │    ---    │        ---        │         ----         |
└──────────────────┴───────────┴───────────────────┴──────────────────────┘

┌─────────────────┬──────────────┬───────────────────┬──────────────────────┐
│     (index)     │   average    │ standardDeviation │ variationCoefficient │
├─────────────────┼──────────────┼───────────────────┼──────────────────────┤
│     0-150s      │     ----     │        ---        │         ----         │
│    150-600s     │     ----     │        ---        │         ----         │
│    600-3000s    │     ----     │        ---        │         ----         │
│  3000-14.000s   │     ----     │        ---        │         ----         │
│ 14.000-62.000s  │     ----     │        ---        │         ----         │
│ 62.000-250.000s │     ----     │        ---        │         ----         │
└─────────────────┴──────────────┴───────────────────┴──────────────────────┘

```
Obs: Os valores utilizados para os intervalos do Histograma são aleatórios.