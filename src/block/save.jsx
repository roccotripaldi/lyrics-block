/*
 * External dependencies
 */
const { Component } = wp.element;
const { InnerBlocks } = wp.editor;
const { ExternalLink } = wp.components;
const { __ } = wp.i18n;

class LyricBlockSave extends Component {
    render() {
        const { attributes } = this.props;
        const { artist, title, showTitle, externalLink } = attributes;
        return (
            <div className="rocco-lyrics is-saved">
                { showTitle && (
                    <h2 className='lyrics-title'>{ title }</h2>
                ) }
                <p className='lyrics-artist'>{ artist }</p>
                <InnerBlocks.Content />
                { externalLink && (
                    <div className='lyrics-external-link'>
                        <ExternalLink href={ externalLink }>{ title }</ExternalLink>
                    </div>
                ) }
            </div>
        );
    }
}

export default LyricBlockSave;
