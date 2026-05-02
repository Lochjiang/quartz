---
tags:
  - Python
---


### 代码示例

```python
import folium
import pandas as pd
import webbrowser
import re
from folium.plugins import MarkerCluster

dfs = pd.read_excel('Orig_data.xlsx',None)

m = folium.Map(
    max_lat=43,
    max_lon=-122,
    min_lat=33,
    min_lon=-112,
    # max_bounds=True,
    zoom_start=12,
    # min_zoom=6,
    max_zoom=13
)

lis = iter(['blue','orange','red','green','purple','gray','pink'])

for sheetname,df in dfs.items():
    m1 = folium.FeatureGroup(name=sheetname).add_to(m)#先聚类后分类
    m_cluster = MarkerCluster().add_to(m1)
    color = next(lis)
    for i in range(len(df)):
        lat = float(re.findall('!3d(.*?)!',df.loc[i,'Link'])[0])
        lon = float(re.findall('!4d(.*?)!',df.loc[i,'Link'])[0])
        folium.Marker(
            location=[lat,lon],
            tooltip=folium.Tooltip('{}({})'.format(df.loc[i,'Name'],sheetname)),
            popup=folium.Popup('<a href="{}">Search in Google Map</a>'.format(df.loc[i,'Link']),max_width=1000),
            icon=folium.Icon(color=color) 
        ).add_to(m_cluster)

folium.LayerControl().add_to(m)
m.save('render.html')
webbrowser.open('render.html')
```

### 高德地图url

```python
   tiles='https://webrd04.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}',
```