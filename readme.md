# Bot de Discord - NewBot

## Descripción
**NewBot** es un bot para Discord diseñado para interactuar con los usuarios mediante comandos slash y realizar diversas tareas, como responder con la latencia del bot, proporcionar información, y más. Está desarrollado utilizando `discord.js` y soporta comandos modulares para facilitar su extensión.

---

## Características
- **Comandos Slash**:
  - `/info`: Proporciona información sobre el bot.
  - `/ping`: Muestra la latencia actual del bot.
- Sistema modular para agregar nuevos comandos fácilmente.
- **Registro de comandos**: Incluye un script para registrar comandos en Discord.
- Manejo eficiente de eventos e interacciones.

---

## Requisitos
- **Node.js**: Versión 16.9.0 o superior.
- **Dependencias**:
  - `discord.js`: ^14.x.x
  - `dotenv`: ^16.x.x

---

## Instalación
1. Clona este repositorio:
   ```bash
   git clone https://github.com/tomigatica15/newbot.git
   ```
2. Instala las dependencias:
 ``` npm install ```
3. Configura las variables de entorno:
    Crea un archivo .env en la raiz del proyecto:
    BOT_TOKEN=tu-bot-token
    CLIENT_ID=tu-client-id
    GUILD_ID=tu-guild-id

    Reemplaza tu-bot-token, tu-client-id, y tu-guild-id con los valores correspondientes de tu aplicación en el Portal de Desarrolladores de Discord. [https://discord.com/developers/applications]
4. Registra los comandos en Discord:
    node deploy-commands.js

---
## Uso
1. Inicia el bot:
    ```node index.js```
2. En Discord, usa los comandos disponibles:
    ```/info:``` Recibe información básica del bot.
    ```/ping:``` Verifica la latencia del bot.

---
## Agregar nuevos comandos
1. Crea un nuevo archivo en el directorio commands/, por ejemplo: hello.js
2. Define el comando:
    ```module.exports = {
        name: "hello",
        description: "Responde con un saludo",
        options: [],
        async execute(interaction) {
            await interaction.reply("¡Hola! 👋");
        },
    };
    ```
3. Registra los comandos nuevamente
    ```node deploy-commands.js```

##  SLASHCOMMAND