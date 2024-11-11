#include <cs50.h>
#include <stdio.h>

int main(void)
{
    int height, row, hash, space;
    do
    {
        height = get_int("Enter the height: ");
    }
    while (height < 1);
    for (row = 1; row < height + 1; row++)
    {
        for (space = 0; space < height - row; space++)
        {
            printf(" ");
        }
        for (hash = 0; hash < row; hash++)
        {
            printf("#");
        }
        printf("\n");
    }
}
