---
tags:
  - Python
---
### 简单创建

```python
G = nx.DiGraph() #Graph()为无向图
```

### 添加节点

```python
G.add_edge('E','F',weight=5) #节点、节点、权重
```

```python
G.add_weighted_edges_from([('P','S',α),('P','D',β)])
```

### 创建数据

```python
import pandas as pd
import networkx as nx

# 创建数据
variables = ['AD', 'P', 'y', 'm', 'e']
values = [
    [0, 0, 0, 0, 0],
    [1, 0, 4, 0, 0],
    [0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
]

df = pd.DataFrame(values, columns=variables, index=variables)
G = nx.from_pandas_adjacency(df, create_using=nx.DiGraph())
```

### 绘制函数

```python
def draw_DiGraph(G):
    import matplotlib.pyplot as plt
    pos = nx.spring_layout(G)
    nx.draw(G, pos, with_labels=True)
	# 添加边的权重标签
    edge_labels = nx.get_edge_attributes(G, 'weight')
    nx.draw_networkx_edge_labels(G, pos, edge_labels=edge_labels)
    plt.show()

draw_DiGraph(G)
```

### 求两点间所有路径

```python
paths = list(nx.all_simple_paths(G, source='P', target='y'))
print(paths)
```

### 计算弹性

```python
paths = list(nx.all_simple_paths(G, source='P', target='y'))
ELAS = 0
for path in paths:
    elas = 1
    for i in range(len(path)-1):
        elas*=G[path[i]][path[i+1]]['weight']
        print(f'[{path[i]}->{path[i+1]}]={G[path[i]][path[i+1]]["weight"]}', end=' ')
    print(f'=> ELAS({path})={elas}')
    ELAS+=elas 
```

### 范例1

```python
import pandas as pd
import networkx as nx
import sympy as sp 

α,β,γ,ω = sp.symbols('α,β,γ,ω')
G = nx.DiGraph()
G.add_weighted_edges_from([
    ('P','S',α),
    ('P','D',β),
    ('S','S',γ),
    ('D','D',ω),
    ('P','P',α)
    ])
df = nx.to_pandas_adjacency(G,dtype=object)
df
```