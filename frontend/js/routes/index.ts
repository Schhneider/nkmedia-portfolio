import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../wayfinder'
/**
 * @see routes/web.php:6
 * @route '/'
 */
export const home = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

home.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:6
 * @route '/'
 */
home.url = (options?: RouteQueryOptions) => {
    return home.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:6
 * @route '/'
 */
home.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:6
 * @route '/'
 */
home.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: home.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:6
 * @route '/'
 */
    const homeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: home.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:6
 * @route '/'
 */
        homeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: home.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:6
 * @route '/'
 */
        homeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: home.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    home.form = homeForm
/**
 * @see routes/web.php:9
 * @route '/projects'
 */
export const projects = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: projects.url(options),
    method: 'get',
})

projects.definition = {
    methods: ["get","head"],
    url: '/projects',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:9
 * @route '/projects'
 */
projects.url = (options?: RouteQueryOptions) => {
    return projects.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:9
 * @route '/projects'
 */
projects.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: projects.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:9
 * @route '/projects'
 */
projects.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: projects.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:9
 * @route '/projects'
 */
    const projectsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: projects.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:9
 * @route '/projects'
 */
        projectsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: projects.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:9
 * @route '/projects'
 */
        projectsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: projects.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    projects.form = projectsForm
/**
 * @see routes/web.php:12
 * @route '/projects/{project}'
 */
export const projectItems = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: projectItems.url(args, options),
    method: 'get',
})

projectItems.definition = {
    methods: ["get","head"],
    url: '/projects/{project}',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:12
 * @route '/projects/{project}'
 */
projectItems.url = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { project: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    project: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        project: args.project,
                }

    return projectItems.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see routes/web.php:12
 * @route '/projects/{project}'
 */
projectItems.get = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: projectItems.url(args, options),
    method: 'get',
})
/**
 * @see routes/web.php:12
 * @route '/projects/{project}'
 */
projectItems.head = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: projectItems.url(args, options),
    method: 'head',
})

    /**
 * @see routes/web.php:12
 * @route '/projects/{project}'
 */
    const projectItemsForm = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: projectItems.url(args, options),
        method: 'get',
    })

            /**
 * @see routes/web.php:12
 * @route '/projects/{project}'
 */
        projectItemsForm.get = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: projectItems.url(args, options),
            method: 'get',
        })
            /**
 * @see routes/web.php:12
 * @route '/projects/{project}'
 */
        projectItemsForm.head = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: projectItems.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    projectItems.form = projectItemsForm