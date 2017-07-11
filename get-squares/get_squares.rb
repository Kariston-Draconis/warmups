require "pry"

def get_squares (numbers)
  numbers.select{ |num| Math.sqrt(num) % 1 == 0}.sort.uniq
end

binding.pry
