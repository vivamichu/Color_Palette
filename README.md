
# ColorME Project
[Перевод на русский](README.ru.md)

## Contents 
- [Description](#description) 
- [Project Structure](#project-structure) 
- [Installation](#installation) 
- [Features](#features)
- [Development Process](#development-process)
- [Pitfalls](#pitfalls)
- [Technologies Used](#technologies-used) 
- [Author](#author) 
 

## Description
ColorME is a web application that allows users to create their own color palettes. Users can select colors from a predefined list, use a color picker to choose custom colors, and generate analogous colors based on their selection.

## Project Structure
The project is structured as follows:

- **src**: Contains the source code of the project.
  - **assets**: Contains React components used in the application.
    - **App.js**: Main component that renders the ColorME application.
  - **styles.css**: Contains the CSS styles for the application.
- **public**: Contains static assets and the index.html file.
- **README.md**: This file provides an overview of the project.

## Installation
To run the ColorME project locally, follow these steps:
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run  `npm install`  to install the dependencies.
4. Run  `npm start`  to start the development server.
5. Open your browser and go to  `http://localhost:xxxx`  to view the application.

## Features
<img width="1440" alt="Screenshot 2024-04-08 at 19 15 07" src="https://github.com/vivamichu/Color_Palette/assets/92267183/a46883f9-ff3f-44ea-b934-e472b4c2b76b">

- Select colors from a list of predefined colors.
- Use the color picker to choose custom colors.
- Change hue, saturation and transparency
- Generate analogous colors based on the selected color.
- Save and share color palettes.

## Development Process

After receiving the task, I started imagining how the color palette web application should look like. I thought a lot and couldn't come up with its design so that it will be convinent for users. I got stuck and then started watching various videos, websites with color palettes. And in one video, I got my inspiration. The button boxes as a workspace where users can generate their own palettes. From then on, I got started with working on this project. The most unique thing was the design I came up with. Its simple, clean and coherent. It doesn't have many confusing elements as in other color palette web apps. I also added my own component outside the task, which is a color information at the bottom of the page which will be helpful to the user to copy it right away.

## Pitfalls

This project, although functional is far from perfect. If I had more time I'd improve the design adding more dynamic elements. The sharing link doesn't work for now as the project is run locally, it could be improved and various social media links could be added. 

## Technologies Used 
- React.js
- react-color (for the color picker)
- chroma-js (for color manipulation)

## Author
Ayaulym R

---

