/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import {__} from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import {useBlockProps} from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

import {MediaUpload, MediaUploadCheck} from '@wordpress/block-editor';
import {Button} from '@wordpress/components';
import icons from './icons';

const ALLOWED_MEDIA_TYPES = ['image'];

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({attributes, setAttributes, isSelected}) {

	const onSelectLeftImage = image => {
		console.log('onSelectLeftImage', image);
		setAttributes({
			leftId: image.id,
			leftUrl: image.url,
		});
	};

	const onSelectRightImage = image => {
		console.log('onSelectRightImage', image);
		setAttributes({
			rightId: image.id,
			rightUrl: image.url,
		});
	};

	const onRemoveLeftImage = () => {
		setAttributes({
			leftId: null,
			leftUrl: null,
		});
	};

	const onRemoveRightImage = () => {
		setAttributes({
			rightId: null,
			rightUrl: null,
		});
	};

	return (
		<div className='juxtapose'>

			{!attributes.leftId ? (

				<MediaUploadCheck>
					<MediaUpload
						onSelect={onSelectLeftImage}
						allowedTypes={ALLOWED_MEDIA_TYPES}
						value={attributes.leftId}
						render={({open}) => (
							<Button onClick={open}>
								{__('Select Image 1', 'cubed')}
							</Button>
						)}
					/>
				</MediaUploadCheck>

			) : (

				<p className="image-wrapper">
					<img
						className='leftimg'
						data-leftid={attributes.leftId}
						src={attributes.leftUrl}
					/>

					{isSelected ? (

						<Button
							className="remove-image"
							onClick={onRemoveLeftImage}
						>
							{icons.remove}
						</Button>

					) : null}

				</p>
			)}

			{!attributes.rightId ? (

				<MediaUploadCheck>
					<MediaUpload
						onSelect={onSelectRightImage}
						allowedTypes={ALLOWED_MEDIA_TYPES}
						value={attributes.rightId}
						render={({open}) => (
							<Button onClick={open}>
								{__('Select Image 2', 'cubed')}
							</Button>
						)}
					/>
				</MediaUploadCheck>

			) : (

				<p className="image-wrapper">
					<img
						className='rightimg'
						data-rightid={attributes.rightId}
						src={attributes.rightUrl}
					/>

					{isSelected ? (

						<Button
							className="remove-image"
							onClick={onRemoveRightImage}
						>
							{icons.remove}
						</Button>

					) : null}

				</p>
			)}

		</div>
	);
}
