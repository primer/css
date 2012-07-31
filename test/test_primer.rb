require 'test/unit'
require 'primer/style'

class TestPrimer < Test::Unit::TestCase
  include Primer::Style

  def setup
    @nodes = parse_files(Primer::APP)
  end

  def test_style
    assert_style @nodes
  end

  def test_asset_url_helper
    iterate_nodes(@nodes) do |node|
      next unless node.is_a?(Sass::Tree::PropNode)
      assert_no_match(/\surl\(/, node.to_scss, "#{node.filename}:#{node.line}")
    end
  end
end
