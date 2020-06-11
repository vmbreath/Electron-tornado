## Sample electron app
### Description
```
Приложение создано на Electron с использованием React и является простым калькулятором (еще в App.js при 
запуске программы в консоль выводятся данные с сервера).
Оно позволяет отправить 2 числа на сервер, выбрать операцию с числами и получить ответ от сервера.
В окне результата выполнения операции появляется полученный с сервера ответ.
Также в консоль выводятся данные с сервера.

Сервер tornado находится по адресу ./tornado-server/helloworld.py
Сервер запускается в порт 8888.
Данные между сервером и клиентом передаются в формате JSON
Сервер получает данные, производит необходимую операцию с числами и возвращает ответ клиенту.
```


### how to build
```
npm i
npm build
electron-packager  ./

pip install tornado
```

### how to run server
```
./tornado-server/helloworld.py
```

### how to run client
```
./my-new-test-app-win32-x64/my-new-test-app.exe
```