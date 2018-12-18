/*
 * External dependencies
 */
const { Component, Fragment } = wp.element;
const { InnerBlocks, InspectorControls, PlainText } = wp.editor;
const { PanelBody, TextControl } = wp.components;
const { __ } = wp.i18n;

class LyricBlockSave extends Component {
    render() {
        const { className, attributes } = this.props;
        const { artist, title } = attributes;
        return (
            <div className={ className }>
                <h2 className='lyrics-title'>{ title }</h2>
                <p className='lyrics-artist'>{ artist }</p>
            </div>
        );
    }
}

export default LyricBlockSave;
