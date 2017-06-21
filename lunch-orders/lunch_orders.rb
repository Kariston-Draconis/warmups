additional = "y"
orders = {}

while additional == "y"
  print "Name for order: "
  name = gets.chomp

  print name + " wants to order: "
  order = gets.chomp

  if orders.has_key?(name)
    orders[name].push(order)
  else
    orders[name] = [order]
  end

  print "Add another order (y/n)? "
  additional = gets.chomp.downcase
end

puts orders
