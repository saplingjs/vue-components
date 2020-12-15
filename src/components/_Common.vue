<script>

export default {
	name: 'common',

	props: {
		/* URL to redirect the user after a successful operation */
		redirect: {
			type: String
		},

		/* URL to be appended before each /data request */
		baseHref: {
			type: String,
			default: '/'
		}
	}
};

</script>

<style lang="stylus" scoped>



</style>
