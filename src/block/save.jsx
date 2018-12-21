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
        const { artist, title, showTitle, externalLink } = attributes;
        return (
            <div className={ className }>
                { showTitle && (
                    <h2 className='lyrics-title'>{ title }</h2>
                ) }
                <p className='lyrics-artist'>{ artist }</p>
                <InnerBlocks.Content />
                { externalLink && (
                    <div className='lyrics-external-link'>
                        <a href={ externalLink } target='_blank'>{ externalLink }</a>
                    </div>
                ) }
            </div>
        );
    }
}

export default LyricBlockSave;
