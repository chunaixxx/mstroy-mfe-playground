# mstroy-mfe-playground
Шаблон для разбития мононилита на микрофронты с использованием Vue 2/3, Quasar 1/2, Webpack 4/5

## Установка
### Клонирование
```
git clone https://github.com/chunaixxx/mstroy-mfe-playground
```
### Установка зависимостей для всех микрофронтов и ядра 
```
npm run install:all
```
### Запуск ядра и всех микрофронтов
```
npm run dev
```

## Ядро и модули
| Модуль          | Vue | Quasar | Bundler   | MFE Tool                            |
|-----------------|-----|--------|-----------|-------------------------------------|
| helmet (Ядро)         | v2.7.16   | v1.0.0     | Webpack 4 | mf-webpack4                         |
| package/counter | v3.4.18   | v2.16.0      | Webpack 5 | ModuleFederationPlugin (by webpack) |

## TODO
- [ ] Стили
- [ ] События/пропсы
- [ ] Обработка ошибок при загрузке микрофронтов
- [ ] Общие зависимости
- [ ] Билд
