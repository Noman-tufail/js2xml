Outer:
for (i = 1; i <= 10; i++) {
   document.write ("<br />");
   document.write ("i: " + i);
   document.write (" j: ");

Inner:
   for (j = 21; j <= 30; j++) {
      if (j == 24)
          {
          continue Inner;
      }
      document.write (j + " ");
  }
}
