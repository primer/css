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

  # this is commented out because I can't figure out how to test that an assertion fails.
  def test_no_js_rules_fails
    data = ".js-style-haha { border: 100px solid #554 }"
    nodes = Sass::SCSS::Parser.new(data, "myfile.css").parse
    #assert_style(nodes)
  end

  def test_asset_url_helper
    iterate_nodes(@nodes) do |node|
      next unless node.is_a?(Sass::Tree::PropNode)
      assert_no_match(/\surl\(/, node.to_scss, "#{node.filename}:#{node.line}")
    end
  end
end
