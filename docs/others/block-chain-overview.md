# Block-chain overview

## keyword

1. crypto-currency
2. cryptographic hash function
    1. attribute:
        i. collision resistance
        ii. hiding: single direction
        iii. puzzle friendly: unpredicable
3. hash puzzle
4. temper-evident-log
5. hash pointer
6. root hash
7. data blocks
8. merkle tree(kind of binary tree)
9. merkle proof
10. full node
11. light node
12. bitcoin script
13. distributed consensus
14. CAP theorem
    1. Consistency
    2. Availability
    3. partition tolerance
15. hash rate: hash cal per second
16. transaction-based ledger
17. UTXO: unspent transaction output: A data set of all unspent block output, full node has to maintain this data structure to quickly check the legitimacy of transaction.
18. transaction fee
19. account-based ledger
20. Bernoulli trial: a random experiment with binary outcome (memoryless)
21. progress free
22. Bernoulli process: a sequence of independent Bernoulli trials
23. Poisson process: when p is small.
24. exponential distribution
25. probability density / time to next block

## Power point

there are two things a decentralized digital currency needs to address,
the first is who can issue currency,
the second is how to verify the legitimacy of transactions.

## The bitcoin network

- application layer: bitcoin block chain
- network layer: P2P overlay network; TCP
- no super node or master node
- seed node: 联系seed node，获得其它节点的地址，一段时间没有消息的节点会被自动删除。
- feature: simple, robust, but no efficient,
- flooding: 同一个消息只接受和转发一次，邻居节点随机选取。
- best effort: 不一定所有节点都收到，各节点不一定同样的顺序收到，可能有节点不按照协议转发。
