#include <cs50.h>
#include <stdio.h>

int main()
{
    int cents;
    do
    {
        cents = get_int("Change owed: ");
    }
    while (cents < 0);

    int quarters = 0, dimes = 0, nickels = 0, pennies = 0;

    quarters = cents / 25;
    cents %= 25;

    dimes = cents / 10;
    cents %= 10;

    nickels = cents / 5;
    cents %= 5;

    pennies = cents;

    int total_coins = quarters + dimes + nickels + pennies;
    printf("Total coins needed: %d\n", total_coins);

    return 0;
}
