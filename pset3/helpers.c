/**
 * helpers.c
 *
 * Helper functions for Problem Set 3.
 */

#include <cs50.h>
#include "helpers.h"

bool binary_search(int value, int values[], int n);
void selection_sort(int values[], int n);

/**
 * Returns true if value is in array of n values, else false.
 */
bool search(int value, int values[], int n)
{
    if (value < 1)
    {
        return false;
    } else {
        return binary_search(value, values, n);
    }
}

/**
 * Sorts array of n values.
 */
void sort(int values[], int n)
{
    // TODO: implement an O(n^2) sorting algorithm
     selection_sort(values, n);
}

bool binary_search(int value, int values[], int n)
{
    int beginning = 0;
    int end = n - 1;

    while (end >= beginning)
    {
        int middle = (beginning + end) / 2;

        if (values[middle] == value)
        {
            return true;
        }
        else if (values[middle] > value)
        {
            end = middle - 1;
        }
        else if (values[middle] < value)
        {
            beginning = middle + 1;
        }
    }

    return false;
}


void selection_sort(int values[], int n)
{
  int temp;

  for (int i = 0; i < n; i++)
  {
    int smallest_index = i;
    for (int j = i+1; j < n; j++)
    {
      if (values[smallest_index] > values[j])
      {
        smallest_index = j;
      }

      // swap values
      temp = values[smallest_index];
      values[smallest_index] = values[i];
      values[i] = temp;
    }

  }
}
