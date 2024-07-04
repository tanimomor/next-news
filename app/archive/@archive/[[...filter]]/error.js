"use client";

// You have to receive the error as {error} else it does not work
export default function FilterError({error}) {
    return (
        <div id={error}>
            <h2>An error occurred!</h2>
            <p>{error.message}</p>
        </div>
    )
}