---
tags:
  - Python
---
### 代码模板:

```python
from PyQt6 import QtCore, QtGui, QtWidgets
from PyQt6.QtWidgets import QApplication, QMainWindow
import sys

class Ui_MainWindow(object):
    def setupUi(self, MainWindow):
        MainWindow.setObjectName("MainWindow")
        MainWindow.resize(400, 300)
        self.centralwidget = QtWidgets.QWidget(parent=MainWindow)
        self.centralwidget.setObjectName("centralwidget")
        self.verticalLayout_2 = QtWidgets.QVBoxLayout(self.centralwidget)
        self.verticalLayout_2.setObjectName("verticalLayout_2")
        self.verticalLayout = QtWidgets.QVBoxLayout()
        self.verticalLayout.setObjectName("verticalLayout")
        self.label = QtWidgets.QLabel(parent=self.centralwidget)
        self.label.setAlignment(QtCore.Qt.AlignmentFlag.AlignCenter)
        self.label.setObjectName("label")
        self.verticalLayout.addWidget(self.label)
        self.pushButton = QtWidgets.QPushButton(parent=self.centralwidget)
        self.pushButton.setObjectName("pushButton")
        self.verticalLayout.addWidget(self.pushButton)
        self.verticalLayout_2.addLayout(self.verticalLayout)
        MainWindow.setCentralWidget(self.centralwidget)

        self.retranslateUi(MainWindow)
        QtCore.QMetaObject.connectSlotsByName(MainWindow)

    def retranslateUi(self, MainWindow):
        _translate = QtCore.QCoreApplication.translate
        MainWindow.setWindowTitle(_translate("MainWindow", "MainWindow"))
        self.label.setText(_translate("MainWindow", "TextLabel"))
        self.pushButton.setText(_translate("MainWindow", "PushButton"))

class MyWin(Ui_MainWindow,QMainWindow):
    def __init__(self) -> None:
        super().__init__()
        self.setupUi(self)
        self.conn()

    def conn(self):
        self.pushButton.clicked.connect(self.showText)

    def showText(self):
        self.label.setText('你点击了按钮')
        
def main():
    app = QApplication(sys.argv)
    win = MyWin()
    win.show()
    sys.exit(app.exec())

if __name__ == '__main__':
    main()
```

### 附带线程的代码模板

```python
from PyQt6 import QtCore, QtGui, QtWidgets
from PyQt6.QtWidgets import QApplication, QMainWindow
from PyQt6.QtCore import QThread, pyqtSignal
from PyQt6.QtNetwork import QLocalServer,QLocalSocket
import datetime

class Ui_MainWindow(object):
    def setupUi(self, MainWindow):
        MainWindow.setObjectName("MainWindow")
        MainWindow.resize(400, 300)
        self.centralwidget = QtWidgets.QWidget(parent=MainWindow)
        self.centralwidget.setObjectName("centralwidget")
        self.verticalLayout_2 = QtWidgets.QVBoxLayout(self.centralwidget)
        self.verticalLayout_2.setObjectName("verticalLayout_2")
        self.verticalLayout = QtWidgets.QVBoxLayout()
        self.verticalLayout.setObjectName("verticalLayout")
        self.label = QtWidgets.QLabel(parent=self.centralwidget)
        self.label.setAlignment(QtCore.Qt.AlignmentFlag.AlignCenter)
        self.label.setObjectName("label")
        self.verticalLayout.addWidget(self.label)
        self.pushButton = QtWidgets.QPushButton(parent=self.centralwidget)
        self.pushButton.setObjectName("pushButton")
        self.verticalLayout.addWidget(self.pushButton)
        self.verticalLayout_2.addLayout(self.verticalLayout)
        MainWindow.setCentralWidget(self.centralwidget)

        self.retranslateUi(MainWindow)
        QtCore.QMetaObject.connectSlotsByName(MainWindow)

    def retranslateUi(self, MainWindow):
        _translate = QtCore.QCoreApplication.translate
        MainWindow.setWindowTitle(_translate("MainWindow", "小程序"))
        self.label.setText(_translate("MainWindow", "信息面板"))
        self.pushButton.setText(_translate("MainWindow", "点击按钮"))

class Worker(QThread):

    signal = pyqtSignal(str)

    def run(self):
        try:
            self.signal.emit('正在运行...')
            self.func()
            self.signal.emit(datetime.datetime.now().strftime('%H:%M:%S - ')+'运行成功!')
        except Exception as e:
            self.signal.emit(datetime.datetime.now().strftime('%H:%M:%S - ')+'错误: '+str(e))

    def func(self):
        pass

class MyWin(Ui_MainWindow,QMainWindow):
    def __init__(self) -> None:
        super().__init__()
        self.setupUi(self)
        self.worker = Worker()
        self.conn()

    def conn(self):
        self.worker.signal.connect(self.label.setText)
        self.pushButton.clicked.connect(self.worker.start)

def main():
    app = QApplication([])
    serverName = '小程序'
    socket = QLocalSocket()
    socket.connectToServer(serverName)
    # 判定应用服务是否正常链接，如正常则证明程序实例已经在运行
    if socket.waitForConnected(500): #数值为等待时间上限, 单位毫秒
        app.quit()       # 如果没有实例运行，则创建应用服务器并监听服务
    else:
        # 原始处理逻辑
        win = MyWin()
        win.show()
        localServer = QLocalServer() 
        localServer.listen(serverName)
        localServer.newConnection.connect(win.activateWindow) #检测到第二次打开动作则窗口闪烁/置前
        app.exec()

if __name__ == '__main__':
    main()
```

### 将 sys.stdout 和 sys.stderr 重定向

```
sys.stdout.write = self.textBrowser.insertPlainText
sys.stderr.write = self.textBrowser.insertPlainText
```

### 含子线程的主程序中终端重定向方法:

设置信号 pyqtsignal(str)，将 sys.stdout/stderr.write 绑定到信号上，再将信号绑定到textBrowser.insertPlainText

### 窗口置顶:

```python
win.setWindowFlags(Qt.WindowType.WindowStaysOnTopHint) #在show前使用
win.setWindowFlag(Qt.WindowType.WindowStaysOnTopHint,True) #设置为False则还原
```

### 安装WebEngine:

```
pip install PyQtWebEngine
```

### 单实例运行方法:

```python
from PyQt6.QtNetwork import QLocalServer,QLocalSocket

app = QApplication([])
serverName = 'AppServer'
socket = QLocalSocket()
socket.connectToServer(serverName)
# 判定应用服务是否正常链接，如正常则证明程序实例已经在运行
if socket.waitForConnected(500): #数值为等待时间上限, 单位毫秒
	app.quit()       # 如果没有实例运行，则创建应用服务器并监听服务
else:
	# 原始处理逻辑
	win = MyWin()
	win.show()
	localServer = QLocalServer() 
	localServer.listen(serverName)
	localServer.newConnection.connect(win.activateWindow) #检测到第二次打开动作则窗口闪烁/置前
	app.exec()
```

### QSettings的使用:

```python
from PyQt6.QtCore import QSettings

self.settings = QSettings('config.ini') 
#存放在注册表, 若添加QSettings.IniFormat则存放在工作目录
self.WebLineEdit.setText(self.settings.value('CollectLinks/url','',str)) #属性名, 默认值, 类型
self.settings.setValue('CollectLinks/url',self.WebLineEdit.text()) #保存设置
```

### 改messagebox的ok为确认

```python
import sys
from PyQt5.QtWidgets import QApplication, QWidget, QPushButton, QMessageBox

app = QApplication(sys.argv)

window = QWidget()
window.setWindowTitle('QMessageBox Demo')
window.setGeometry(200, 200, 300, 200)

btn = QPushButton('Click me', window)
btn.move(100, 70) 

def on_button_clicked():
    alert = QMessageBox()
    alert.setText('You clicked the button!')
    alert.setStandardButtons(QMessageBox.Ok) 
    alert.button(QMessageBox.Ok).setText('确认')
    alert.exec_()

btn.clicked.connect(on_button_clicked)

window.show()
sys.exit(app.exec_())
```

### 滑轮调节按钮

#### GPT版本：

```python
import sys
from PyQt6.QtWidgets import QApplication, QWidget, QPushButton
from PyQt6.QtCore import Qt

class MyWindow(QWidget):
    def __init__(self):
        super().__init__()
        
        self.button = QPushButton('1', self)
        self.button.setGeometry(100, 100, 100, 50)
        
        self.button.wheelEvent = self.wheel_event
        
        self.setWindowTitle('PyQt6 Wheel Event Demo')
        
    def wheel_event(self, event):
        if event.angleDelta().y() > 0:
            value = int(self.button.text()) + 1
            if value > 9:
                value = 9
        else:
            value = int(self.button.text()) - 1
            if value < 1:
                value = 1
                
        self.button.setText(str(value))
        
app = QApplication(sys.argv)
window = MyWindow()
window.show()
app.exec()
```

#### claude版本：

```python
import sys
from PyQt6.QtWidgets import QApplication, QWidget, QPushButton
from PyQt6.QtCore import Qt

class MyWindow(QWidget):
    def __init__(self):
        super().__init__()
        
        self.button = QPushButton('1', self)
        self.button.setGeometry(100, 100, 100, 50)
        
        self.button.wheelEvent = self.wheel_event
        
        self.setWindowTitle('PyQt6 Wheel Event Demo')
        
    def wheel_event(self, event):
        if event.angleDelta().y() > 0:
            value = int(self.button.text()) + 1
            if value > 9:
                value = -9
        else:
            value = int(self.button.text()) - 1
            if value < -9:
                value = 9
                
        self.button.setText(str(value))
        
app = QApplication(sys.argv)
window = MyWindow()
window.show()
app.exec()
```

### 自动填充

```python
self.completer = QCompleter(['xxx','xxx'])
self.completer.setCompletionMode(QCompleter.CompletionMode.InlineCompletion)
self.completer.setCaseSensitivity(Qt.CaseSensitivity.CaseInsensitive)
```

### 信息框自动滚动

```python
self.textBrowser.textChanged.connect(self.textBrowser.ensureCursorVisible)
```

### 注意事项

- append 为文末插入，insertPlainText 为光标处插入。
- textBrowser 设置纯阅读模式不仅需要设置 readOnly 为 True，还需要将 textInteractionFlags 属性设置为 NoTextInteraction。

### 逻辑部分

```python
from PyQt5.QtWidgets import QApplication, QMainWindow
from Ui_untitled import Ui_MainWindow

class MyWin(Ui_MainWindow,QMainWindow):
    def __init__(self) -> None:
        super().__init__()
        self.setupUi(self)

def main():
    app = QApplication([])
    win = MyWin()
    win.show()
    app.exec()

if __name__ == '__main__':
    main()
```

### textBrowser

```python
self.textBrowser.setText(text),
self.textBrowser.moveCursor(QTextCursor.MoveOperation.End)
```

### settings

```python
from PyQt6.QtCore import QSettings

self.settings = QSettings('config.ini') 
#存放在注册表, 若添加QSettings.IniFormat则存放在工作目录
self.WebLineEdit.setText(self.settings.value('CollectLinks/url','',str)) #属性名, 默认值, 类型
self.settings.setValue('CollectLinks/url',self.WebLineEdit.text()) #保存设置
```

### 设置行间距

```python
cursor = self.textEdit.textCursor()
cursor.select(QTextCursor.SelectionType.Document)
block_format = QTextBlockFormat()
block_format.setLineHeight(150, 1)  # 1 = ProportionalHeight
cursor.mergeBlockFormat(block_format)
self.textEdit.setTextCursor(cursor)
```

