print "You say: "
response = gets.chomp

loop do
  if response.downcase == "exit"
    exit
  elsif response == ""
    puts "Fine, be that way"
    print "You say: "
    response = gets.chomp
  elsif response == response.upcase
    puts "Woah, chill out!"
    print "You say: "
    response = gets.chomp
  elsif response[-1] == "?"
    puts "Sure."
    print "You say: "
    response = gets.chomp
  else
    puts "Whatever."
    print "You say: "
    response = gets.chomp
  end
end
