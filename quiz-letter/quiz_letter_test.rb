require 'minitest/autorun'
require_relative 'quiz_letter'

class QuizLetterTest < MiniTest::Unit::TestCase

  def test_A
    can_make_word("A")
    assert true
  end

  def test_BARK
    skip
    can_make_word("BARK")
    assert true
  end

  def test_BOOK
    skip
    can_make_word("BOOK")
    assert false
  end

  def test_TREAT
    skip
    can_make_word("TREAT")
    assert true
  end

  def test_COMMON
    skip
    can_make_word("COMMON")
    assert false
  end

  def test_SQUAD
    skip
    can_make_word("SQUAD")
    assert true
  end

  def test_CONFUSE
    skip
    can_make_word("CONFUSE")
    assert true
  end

  def test_BOUGHT
    skip
    can_make_word("BOUGHT")
    assert false
  end

end
