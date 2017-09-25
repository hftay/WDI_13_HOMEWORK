require 'pry'

# 1. Create a variable named days_of_the_week as an array of the following:

days_of_the_week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

# 2. Remove Sunday from the last postion and move it to the first position. Use array methods.
# remove arr.last
# add arr.last to first position of arr

last_day = days_of_the_week.last
days_of_the_week.unshift(last_day)
days_of_the_week.pop

# 3. Create a new array of the days of the week:
# The first inner array should be the weekdays
# The second inner array should be the weekend days

weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
weekends = ['Sat', 'Sun']
days_of_the_week = [weekdays, weekends]


# 4. Remove either the weekdays or the weekends



# 5. Sort the remaining days alphabetically
# use .sort function
days_of_the_week.sort

puts days_of_the_week

binding.pry