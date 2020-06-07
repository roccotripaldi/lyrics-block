/*
 * External dependencies
 */
const { Component } = wp.element;
const { InnerBlocks } = wp.blockEditor;
const { Dashicon } = wp.components;

class LyricBlockSave extends Component {
    render() {
        const { attributes } = this.props;
        const { artist, title, showTitle, externalLink } = attributes;
        return (
            <div className="is-saved">
                { showTitle && (
                    <h2 className='lyrics-title'>{ title }</h2>
                ) }
                <p className='lyrics-artist'>{ artist }</p>
                <InnerBlocks.Content />
                { externalLink && (
                    <div className='lyrics-external-link'>
                        <a
                            className='components-external-link'
                            href={ externalLink } target="_blank"
                            rel="noopener noreferrer"
                        >
                            { title }
                            <Dashicon icon="external" className="components-external-link__icon" />
                        </a>
                    </div>
                ) }
            </div>
        );
    }
}

export default LyricBlockSave;
