<?php
/**
 * Plugin Name:       JuxtaposeJS Block
 * Description:       Before and after image slider block built with JuxtaposeJS.
 * Requires at least: 5.6
 * Requires PHP:      7.2
 * Version:           0.1.0
 * Author:            Richard Aber <richaber@gmail.com>
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       juxtaposejs-block
 *
 * @package           RichAber\JuxtaposeJSBlock
 */

define( 'RICHABER_JUXTAPOSEJS_DIR', __DIR__ );
define( 'RICHABER_JUXTAPOSEJS_FILE', __FILE__ );

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it also registers all assets, so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/writing-your-first-block-type/
 */
function richaber_juxtaposejs_block_init() {
	// Can "find" the block.json if you provide full path to directory.
	register_block_type( __DIR__ );
}

add_action( 'init', 'richaber_juxtaposejs_block_init' );

/**
 * Enqueue frontend block assets.
 */
function richaber_juxtaposejs_block_scripts() {

	$suffix = ( defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ) ? '' : '.min';

	$url = plugin_dir_url( RICHABER_JUXTAPOSEJS_FILE );

	wp_enqueue_style(
		'juxtapose',
		$url . '/build/juxtaposejs/build/css/juxtapose.css',
		[],
		'1.1.6'
	);

	wp_enqueue_script(
		'juxtapose',
		$url . '/build/juxtaposejs/build/js/juxtapose' . $suffix . '.js',
		[],
		'1.1.6',
		true
	);
}

add_action( 'wp_enqueue_scripts', 'richaber_juxtaposejs_block_scripts' );
