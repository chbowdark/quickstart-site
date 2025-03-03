import Link from "next/link"

const Logo = (props) => {
  
  return (
    <Link href="https://www.colbyhemond.com">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="200pt"
        height="40pt"
        viewBox="0 0 250 50"
        {...props}
        fill="currentColor"
      >
        <path d="M55.455 25.977c2.588 0 4.9-.88 6.458-2.589l-1.181-1.181c-1.433 1.483-3.192 2.111-5.202 2.111-4.247 0-7.438-3.116-7.438-7.287 0-4.171 3.191-7.287 7.438-7.287 2.01 0 3.769.628 5.202 2.086l1.181-1.182c-1.558-1.708-3.87-2.563-6.433-2.563-5.302 0-9.222 3.795-9.222 8.946s3.92 8.946 9.197 8.946Zm16.544 0c5.277 0 9.222-3.795 9.222-8.946s-3.945-8.946-9.222-8.946c-5.328 0-9.248 3.82-9.248 8.946 0 5.126 3.92 8.946 9.248 8.946Zm0-1.659c-4.247 0-7.413-3.091-7.413-7.287s3.166-7.287 7.413-7.287c4.221 0 7.362 3.091 7.362 7.287s-3.141 7.287-7.362 7.287Zm12.196 1.508h11.71v-1.608h-9.85V8.236h-1.86v17.59Zm24.686-9.071c1.608-.654 2.688-1.985 2.688-3.996 0-2.864-2.261-4.523-6.181-4.523h-7.589v17.59h8.092c4.397 0 6.608-1.709 6.608-4.699 0-2.387-1.357-3.87-3.618-4.372Zm-3.619-6.986c2.815 0 4.448 1.081 4.448 3.191 0 2.111-1.633 3.192-4.448 3.192h-5.603V9.769h5.603Zm.603 14.524h-6.206v-6.609h6.206c3.091 0 4.775 1.006 4.775 3.292 0 2.312-1.684 3.317-4.775 3.317Zm22.374-16.057h-1.859l-6.031 9.876-6.031-9.876h-1.985l7.036 11.509v6.081h1.834v-6.081l7.036-11.509ZM126.988 43.052h2.889c2.315 0 3.88-1.522 3.88-3.65s-1.565-3.651-3.88-3.651h-2.889v7.301Zm.532-.479v-6.342h2.315c2.065 0 3.39 1.314 3.39 3.171 0 1.856-1.325 3.171-3.39 3.171h-2.315Zm12.092 0v-2.994h3.89v-.469h-3.89v-2.879h4.349v-.48h-4.881v7.301h5.037v-.479h-4.505Zm15.095-6.822-2.951 6.613-2.952-6.613h-.584l3.254 7.301h.532l3.254-7.301h-.553Zm5.74 6.822v-2.994h3.891v-.469h-3.891v-2.879h4.35v-.48h-4.882v7.301h5.038v-.479h-4.506Zm9.923.479h4.735v-.479h-4.203v-6.822h-.532v7.301Zm12.53.052c2.169 0 3.796-1.574 3.796-3.702s-1.627-3.703-3.796-3.703c-2.18 0-3.797 1.586-3.797 3.703s1.617 3.702 3.797 3.702Zm0-.49c-1.867 0-3.265-1.366-3.265-3.212s1.398-3.213 3.265-3.213c1.856 0 3.254 1.367 3.254 3.213s-1.398 3.212-3.254 3.212Zm11.737-6.863h-2.618v7.301h.532v-2.388h2.086c1.836 0 2.941-.918 2.941-2.451 0-1.544-1.105-2.462-2.941-2.462Zm0 4.433h-2.086v-3.953h2.086c1.565 0 2.399.72 2.399 1.982 0 1.251-.834 1.971-2.399 1.971Zm15.638 2.868-.01-7.301h-.438l-3.265 5.643-3.265-5.643h-.448v7.301h.521v-6.226l3.056 5.256h.261l3.056-5.277.011 6.247h.521Zm6.554-.479v-2.994h3.89v-.469h-3.89v-2.879h4.349v-.48h-4.881v7.301h5.038v-.479h-4.506Zm15.335-6.822v6.342l-4.964-6.342h-.449v7.301h.532v-6.341l4.975 6.341h.438v-7.301h-.532Zm7.952 7.301h.532v-6.821h2.628v-.48h-5.789v.48h2.629v6.821ZM57.339 35.751l-2.242 6.582-2.274-6.582h-.511l-2.284 6.571-2.222-6.571h-.563l2.482 7.301h.563l2.274-6.55 2.264 6.55h.563l2.472-7.301h-.522Zm6.064 6.822v-2.994h3.89v-.469h-3.89v-2.879h4.349v-.48h-4.881v7.301h5.037v-.479h-4.505Zm14.261-3.286c.73-.24 1.22-.803 1.22-1.669 0-1.21-.949-1.867-2.513-1.867h-3.046v7.301h3.254c1.794 0 2.691-.698 2.691-1.929 0-1.012-.574-1.638-1.606-1.836ZM76.35 36.21c1.262 0 1.992.49 1.992 1.45 0 .97-.73 1.46-1.992 1.46h-2.493v-2.91h2.493Zm.229 6.383h-2.722v-3.014h2.722c1.398 0 2.159.459 2.159 1.502 0 1.053-.761 1.512-2.159 1.512Zm9.985.511c1.805 0 2.629-.897 2.629-1.929 0-2.649-4.558-1.356-4.558-3.546 0-.803.636-1.461 2.054-1.461.657 0 1.398.199 2.003.616l.198-.428c-.563-.407-1.397-.657-2.201-.657-1.794 0-2.586.908-2.586 1.94 0 2.691 4.558 1.377 4.558 3.567 0 .793-.647 1.429-2.107 1.429-.981 0-1.909-.396-2.41-.918l-.239.397c.532.584 1.575.99 2.659.99Zm7.91-.052h.532v-7.301h-.532v7.301Zm7.951 0h.532v-6.821h2.628v-.48h-5.788v.48h2.628v6.821Zm8.483-.479v-2.994h3.89v-.469h-3.89v-2.879h4.349v-.48h-4.881v7.301h5.038v-.479h-4.506ZM143.686 8.236v6.936h-7.991V8.236h-4.071v17.59h4.071v-7.212h7.991v7.212h4.07V8.236h-4.07Zm11.091 14.323v-4.071h8.166v-3.166h-8.166v-3.819h9.247V8.236h-13.293v17.59h13.62v-3.267h-9.574Zm31.445 3.267-.051-17.59h-3.342l-6.483 10.931-6.583-10.931h-3.367v17.59h3.819V15.498l5.151 8.468h1.835l5.176-8.694.025 10.554h3.82Zm11.493.301c5.528 0 9.624-3.844 9.624-9.096 0-5.252-4.096-9.096-9.624-9.096-5.553 0-9.624 3.869-9.624 9.096s4.071 9.096 9.624 9.096Zm0-3.467c-3.141 0-5.503-2.287-5.503-5.629 0-3.342 2.362-5.629 5.503-5.629s5.503 2.287 5.503 5.629c0 3.342-2.362 5.629-5.503 5.629ZM221.32 8.236v10.68l-8.745-10.68h-3.367v17.59h4.021v-10.68l8.769 10.68h3.342V8.236h-4.02Zm6.995 17.59h7.991c5.754 0 9.699-3.468 9.699-8.795s-3.945-8.795-9.699-8.795h-7.991v17.59Zm4.071-3.342V11.578h3.719c3.493 0 5.779 2.086 5.779 5.453 0 3.367-2.286 5.453-5.779 5.453h-3.719ZM15.784 38.79c2.611 0 4.773-.942 6.186-2.676l-2.226-2.055c-1.006 1.178-2.269 1.777-3.768 1.777-2.804 0-4.795-1.969-4.795-4.795 0-2.826 1.991-4.795 4.795-4.795 1.499 0 2.762.599 3.768 1.755l2.226-2.055c-1.413-1.712-3.575-2.654-6.165-2.654-4.666 0-8.134 3.232-8.134 7.749 0 4.517 3.468 7.749 8.113 7.749Zm18.794-15.241v5.908h-6.807v-5.908h-3.468v14.984h3.468V32.39h6.807v6.143h3.468V23.549h-3.468Z" />
        <path d="M36.34 40.66h1.7v3.4H1.98V8.3h36.06V21.44h-3.4V11.7H5.38v28.96h30.96Z" />
        <path
      
          strokeLinecap="square"
          strokeMiterlimit={3}
          d="M46.835 30.815h196.837"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </Link>
  )}
  export default Logo