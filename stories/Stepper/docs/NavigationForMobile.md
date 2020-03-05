The mobile version of the Steppers does not display the complete list of available steps, but only the current one. For this reason it is possible to add progress indicators to the `.steppers-nav`.

These indicators will only be displayed on mobile, but in the following examples they have also been made available in desktop view. However, viewing in a reduced viewport is recommended to obtain a realistic example of the final appearance.

### Progress bar 
The Progress bar is the native one of Bootstrap 4 and is contained in an element `.steppers-progress` located between the "Back" and "Forward" buttons.

### Pallini
The dots are elements `<li>` contained in a list `.steppers-dots` located between the "Back" and "Forward" buttons.

For accessibility reasons, i `<li>`must contain one `<span>`with a class `.sr-only` reserved for screen readers with a text indicating the number of steps and the status.

### Save button
On mobile devices it is possible to insert a third "Save" button of different appearance with class `.steppers-btn-save` between the "Back" and "Next" buttons.

### Confirm button
On mobile devices it is possible to replace the "Next" button with a "Confirm" button of different style, with the class `.steppers-btn-confirm`.