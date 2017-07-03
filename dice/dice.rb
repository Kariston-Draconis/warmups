require "pry"
class Dice
  @@rolls = []
  def self.roll(number=1)
    if number == 1
      rand(1..6)
    else
      @@rolls = Array.new(number) { rand(1..6) }
    end
    Dice
  end

  def self.total
    @@rolls.sum
  end
end
binding.pry
