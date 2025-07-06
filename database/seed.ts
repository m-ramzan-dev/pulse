import 'dotenv/config'
import { createClient } from '@supabase/supabase-js'
import { fakerEN_US as faker } from '@faker-js/faker'

type Project = {
  name: string
  slug: string
  status: 'in-progress' | 'completed'
  collaborators: number[]
}

const supabase = createClient(
  process.env.VITE_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_SECRET!,
)

const createProjects = async (n: number) => {
  const projects: Project[] = []

  for (let i = 0; i < n; i++) {
    const name = faker.lorem.words(3)
    projects.push({
      name: name,
      slug: name.toLowerCase().replace(/ /g, '-'),
      status: faker.helpers.arrayElement(['in-progress', 'completed']),
      collaborators: faker.helpers.arrayElements([1, 2, 3]),
    })
  }

  const { error } = await supabase.from('projects').insert(projects)
  if (error) {
    console.error('Insert error:', error)
  } else {
    console.log(`${n} projects inserted successfully`)
  }
}

createProjects(10)
