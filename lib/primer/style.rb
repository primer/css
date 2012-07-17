require 'primer'
require 'sass'

module Primer
  module Style
    extend self

    # Parse all SCSS files in a directory.
    #
    # root - String root of directory
    #
    # Returns an Array of Sass::Nodes.
    def parse_files(root)
      nodes = []
      Dir["#{root}/**/*.scss"].each do |path|
        data = File.read(path)
        nodes << Sass::SCSS::Parser.new(data, path).parse
      end
      nodes
    end

    # Iterate over all nodes in Sass tree.
    #
    # nodes - Array of Sass::Nodes returned from parse_files
    #
    # Returns nothing.
    def iterate_nodes(nodes, &block)
      nodes.each do |node|
        node.each(&block)
      end
      nil
    end

    # Run style assertions on Sass nodes.
    #
    # nodes - Array of Sass::Nodes
    #
    # Examples
    #
    #     include Primer::Style
    #     def test_style
    #       assert_style(nodes)
    #     end
    #
    # Returns nothing.
    def assert_style(nodes)
      iterate_nodes(nodes) do |node|
        assert_no_js_rules(node)
      end
    end

    # Check if any CSS rules use js- classes or ids.
    def assert_no_js_rules(node)
      return unless node.is_a?(Sass::Tree::RuleNode)
      assert_no_match(/(\#|\.)js-/,
        node.rule.first, "#{node.filename}:#{node.line}")
    end
  end
end
