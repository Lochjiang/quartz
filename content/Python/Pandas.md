---
tags:
  - Python
---
### 数据查询模板

```python
# %%
import pandas as pd

df = pd.read_excel('理学院.xlsx')
backup = df.copy()

# %%
df.columns

# %%
cond = pd.concat([
    # df['专业'] == '统计学',
    df['姓名'].str.fullmatch('王..'),
    df['单位性质']=='国有企业',
],axis=1).all(axis=1)
df[cond]
```

### 分组问题

```python
def func(k,n):
    t = n//k
    for i in range(t):
        print(f'第{i}组:{k*i}~{50+k*i}')
    if n%k:
        print(f'第{i+1} 组:{k*(i+1)}~{n}')
```

其中，n是总人数，k是小组容量，t是小组数

### 按五十个一组进行分组：

```
df['Rank'] = df.index//50+1
```

### 对列名重命名:

```
df = df.rename(columns={'A': 'new_A'})
```

### 多个df表录入单个excel文件

```python
import pandas as pd

# 假定你已经有一个新的DF数据块：df1, df2
writer = pd.ExcelWriter('test.xlsx',mode='a',if_sheet_exists='error')
df1.to_excel(writer,sheet_name='Sheet',index=False)
df2.to_excel(writer,sheet_name='Sheet2',index=False)
writer.close()
```

- if_sheet_exists =
  - error：引发 ValueError。
  - new：创建一个新工作表，其名称由引擎确定。
  - replace：在写入之前删除工作表的内容。
  - overlay：将内容写入现有工作表而不删除旧内容。可能会覆盖部分。



### groupby+unstack实现数据透视表效果

```python
df1 = df.groupby(['所属区域','考察类别'])[['实际得分','应得分']].aggregate('sum')
df1 = df1.unstack()
df1[('实际得分','合计')] = df1['实际得分'].sum(axis=1)
df1[('应得分','合计')] = df1['应得分'].sum(axis=1)
df1.loc['合计'] = df1.sum(axis=0)
(df1['实际得分']/df1['应得分']*100).round(2).to_excel('test3.xlsx',sheet_name='Sheet2')
```

### 随机数据生成模板

```python
import pandas as pd
import numpy as np

# 创建一个示例数据集
data = {
    'Group': ['A', 'B', 'C', 'A', 'A', 'C', 'B'],
    'Gender': ['m', 'f', 'f', 'f', 'm', 'm', 'f'],
    'EstablishedDate': ['2024-01-01', '2024-01-02', '2024-01-03', '2024-01-04', '2024-01-05', '2024-01-06', '2024-01-07'],
    'EndDate': ['2025-02-08', '2025-03-09', '2025-04-10', '2025-05-11', '2025-06-12', '2025-07-13', '2025-08-14'],
    'Height':[165,168,184,175,174,183,172],
    'Weight':[64.5,48.0,np.nan,76.2,np.nan,54.5,62.3]
}

# 创建DataFrame
df = pd.DataFrame(data)
```

### 计算日期差值（单位：年）

```python
(((pd.to_datetime(df['EndDate']) - pd.to_datetime(df['EstablishedDate'])).dt.days)/365).round(2)
```

### 交换两列的值

```python
df['A'],df['B'] = df['B'],df['A']
```

### 将某列值移动到另一列

```python
df[0],df[1] = np.nan,df[0]
```

### 三大查询

```python
df.describe()    # 查看数据统计信息
df.info()    # 查看数据类型
df.head()    # 查看数据集的前五行
```

### 查询数据缺失值

```python
df.isnull().sum()
```

### 查看映射关系

```python
df.groupby('考察结果')['实际得分'].aggregate(set).to_dict()
```

### 查找某值在哪些列

```python
df.isin(['-']).any() #查看是否存在
df.isin(['-']).sum() #查看数量
```

### 重设index

```python
df3.index = range(1,len(df3)+1)
```

### 注意事项

- `df.replace()` 中，`regex=True` 对数值的处理逻辑

### 抽样

```python
df.loc[random.choice(df.index, size=5, replace=False)]
```

### str.replace


```python
str.replace(r'^(.{1}).', r'\1*')
```

### 读取没有表头的数据

```python
df = pd.read_excel('Book3.6.xls',header=None)
```