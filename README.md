# mstroy-mfe-playground
Шаблон для разбития мононилита на микрофронты с использованием Vue 2/3, Quasar 1/2, Webpack 4/5

## Установка
### Клонирование
```
git clone https://github.com/chunaixxx/mstroy-mfe-playground
```
### Установка зависимостей для ядра и всех микрофронтов 
```
npm run install:all
```
### Запуск ядра и всех микрофронтов
```
npm run dev
```

## Ядро и модули
| Модуль          | Vue | Quasar | Bundler   | MFE Tool                            | Host |
|-----------------|-----|--------|-----------|-------------------------------------|------|
| helmet (Ядро)         | v2.7.16   | v1.0.0     | Webpack 4 | mf-webpack4          |  http://localhost:8080 |
| package/counter | v3.4.18   | v2.16.0      | Webpack 5 | ModuleFederationPlugin (by webpack) |  http://localhost:9000 |

## TODO
- [ ] Стили
- [ ] События/пропсы
- [ ] Обработка ошибок при загрузке микрофронтов
- [ ] Общие зависимости
- [ ] Билд

## Заметки

Для возможности регистрации quasar-приложения как микрофронт необходимо создать файл-прослойку main.js и указать его как входную точку в quasar.conf.js ([reference](https://github.com/module-federation/module-federation-examples/tree/master/quasar-cli-vue3-webpack-javascript))
```
extendWebpack(cfg) {
        cfg.entry = path.resolve(__dirname, "./.quasar/main.js");
}
```
