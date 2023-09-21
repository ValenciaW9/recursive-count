def recursive_count(number = 0)
  if number < 10
    puts number # output the number
    recursive_count(number + 1) # recursively call the function with the next number
  end
end

 #{The method takes an optional parameter number with a default value of 0. It then checks if the number is less than 10. If it is, it uses puts to output the number and recursively calls recursive_count with the next number (number + 1).
 
if __FILE__ == $PROGRAM_NAME
  recursive_count
end

# OPTIONAL
# Please add your pseudocode to this file
# And a written explanation of your solution
