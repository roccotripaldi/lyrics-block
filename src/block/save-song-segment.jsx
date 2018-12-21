/*
 * External dependencies
 */
const { Component, Fragment } = wp.element;
const { InnerBlocks, InspectorControls, PlainText } = wp.editor;
const { PanelBody, TextControl } = wp.components;
const { __ } = wp.i18n;

class SongSegmentSave extends Component {
    render() {
        const { attributes } = this.props;
        const { content } = attributes;
        return (
            <div className='lyrics-song-segment'>
                { content }
            </div>
        );
    }
}

export default SongSegmentSave;
