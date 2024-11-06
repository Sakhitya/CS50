# CS50 Final Project - Numeric Convertor
## Web Application
#### Video Demo:  [video](https://www.youtube.com/watch?v=5wcLTc4DUEw)
#### Description:

Numeric Converter is an interactive, web-based tool for quick and precise number conversions across multiple numerical bases and formats. This tool allows you to seamlessly convert numbers between Binary, Decimal, and Hexadecimal formats and even provides Roman Numeral representations. Whether you're a student needing conversions for homework, a developer working with multiple bases, or anyone in need of number translations, this project provides a straightforward and efficient solution.

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Usage](#usage)
4. [Code Structure](#code-structure)
5. [How Conversion Works](#how-conversion-works)
6. [Creator](#creator)

------

## Features

- **Multi-Base Conversion**: Convert input numbers from Binary, Decimal, or Hexadecimal to other base formats in a single step.
- **Roman Numeral Conversion**: Supports conversion from Decimal to Roman numerals for values from 1 to 3999.
- **Responsive Interface**: Clean, mobile-friendly design for easy use on both desktops and mobile devices.
- **Error Handling**: Provides user feedback on invalid inputs or out-of-range numbers, enhancing usability.
- **Modern UI**: Styled with CSS for a visually appealing and intuitive interface.

## Technologies Used

This project relies on the following technologies:

- **HTML** for structuring the page layout and elements.
- **CSS** for design and styling, with custom variables for color themes and responsive layout.
- **JavaScript** for core functionality, including number conversions, validation, and UI interaction.
- **Google Fonts** to enhance readability and styling, using the 'Poppins' font family.

## Usage:

#### Basic Steps

1. **Enter a number:**
    - Input the number you want to convert in the text field.
2. **Select the Base of Input Number:**
    - Choose from the dropdown menu to indicate the base of your input number (Binary, Decimal, or Hexadecimal).
3. **Press the Convert Button:**
    - Click the "Convert" button to execute the conversion and see results for Binary, Decimal, Hexadecimal, and Roman numeral formats.
4. **Clear Results:**
    - Use the "Reset" button to clear the input field and reset all results for a new conversion.

#### Result

- **Binary, Decimal, and Hexadecimal:** Displays the number in each of these bases based on your input.
- **Roman Numerals:** Converts decimal numbers from 1 to 3999 into Roman numerals. If the number is outside this range, "Out of Range" is displayed.

## Code Structure

This project consists of three primary files:

1. **index.html:** Contains the main structure and elements of the app, including header, footer, input fields, and result displays.
2. **style.css:** Defines the layout, color scheme, typography, and button styling. Key features include:
    - CSS variables for color themes.
    - Flexbox for responsive alignment.
    - Hover and transition effects for buttons.
3. **script.js:** Implements JavaScript functions for conversions and input handling. Notable functions include:
    - convert(): Validates input and handles conversions to different bases.
    - toRoman(): Converts decimal values to Roman numerals using a mapping array.
    - resetFields(): Clears the input and result fields for a new calculation.

## How Conversion Works

The JavaScript file (script.js) handles conversions with the following logic:

1. **Base Conversion:**
    - The input value is parsed into a decimal number using parseInt() based on the selected base.
    - Using toString(base), the number is converted to Binary, Decimal, and Hexadecimal bases.
    - Invalid inputs prompt an alert to guide the user to enter valid numbers.
2. **Roman Numeral Conversion:**
    - The function toRoman() maps decimal numbers to Roman numerals through a predefined array of numeral values.
    - For each number, the highest possible Roman numeral is appended repeatedly until the entire number is converted.
    - Supports values from 1 to 3999; otherwise, displays "Out of Range."

## Creator

This project was created by Sakhitya. Feel free to reach out for feedback, suggestions, or collaboration.

- [GitHub](github.com/Sakhitya)
- [LinkedIn](linkedin.com/in/sakhityavs04/)
