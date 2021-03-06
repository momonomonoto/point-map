#  Point map

Приложение для создания произвольного маршрута на карте. Демо: https://momonomonoto.github.io/point-map/

### Установка

```bash
git clone git@github.com:momonomonoto/point-map.git
npm install
```

### Запуск

```bash
npm start
localhost:8080
```
### Тесты

```bash
npm run test
```
### Prettier

```bash
npm run prettier
```
### Основные возможности:
 - Внесение геоточек на карту.
 - Изменение порядка геоточек в списке.
 - Изменение порядка соединения геоточек на карте.
 - Внесение геоточек в общий список.
 - Удаление геоточек.
 - Новая геоточка располагается по центру карты. 
 - Навигация между геоточками при их нажатиии в списке.
 - Сохранение состояния геоточек при перезагрузки страницы.
 
 
### Используемые технологии:
 - React
 - Redux
 - Redux Persist
 - Webpack
 - Eslint
 - Enzyme
 - SASS
 - Prettier
 
  Архитектура организации компонентов Redux спроектирована с помощью Ducks.
  https://github.com/erikras/ducks-modular-redux


