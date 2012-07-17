require 'test/unit'
require 'primer/style'

class TestPrimer < Test::Unit::TestCase
  include Primer::Style

  def test_style
    assert_style parse_files(Primer::APP)
  end
end
