class Robot
  def initialize
    @name = ('AA'..'ZZ').to_a.sample + ('000'..'999').to_a.sample
  end

  def name
    @name
  end

  def reset
    @name = ('AA'..'ZZ').to_a.sample + ('000'..'999').to_a.sample
  end
end
