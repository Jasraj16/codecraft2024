def dfs_recursive(graph, vertex, visited):
    visited.add(vertex)
    print(vertex)  # Process the vertex (e.g., print it)
    
    for neighbor in graph[vertex]:
        if neighbor not in visited:
            dfs_recursive(graph, neighbor, visited)

# Example usage
graph = {
    0: [1, 2],
    1: [0, 3, 4],
    2: [0, 5],
    3: [1],
    4: [1],
    5: [2]
}

visited = set()
dfs_recursive(graph, 0, visited)
